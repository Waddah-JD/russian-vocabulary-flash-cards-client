import { useEffect, useState } from "react";

type ReturnType<T> = {
  data: T | null;
  loading: boolean | null;
  error: unknown;
  done: boolean;
  trigger: () => Promise<void>;
};
type Options = {
  triggerOnMount?: boolean;
};

// it's like useSWR only worse
function useFetch<T>(fn: (...args: unknown[]) => Promise<T>, options?: Options): ReturnType<T> {
  const triggerOnMount = options?.triggerOnMount || false;

  const [data, setData] = useState<ReturnType<T>["data"]>(null);
  const [loading, setLoading] = useState<ReturnType<T>["loading"]>(null);
  const [error, setError] = useState<ReturnType<T>["error"]>();
  const [done, setDone] = useState<ReturnType<T>["done"]>(false);

  async function handleFetch(): Promise<void> {
    try {
      setLoading(true);
      const result = await fn();
      setData(result);
      setDone(true);
    } catch (error) {
      console.error(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (triggerOnMount) {
      handleFetch();
    }
  }, []);

  return { data, loading, error, done, trigger: handleFetch };
}

export default useFetch;
