/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";

type ReturnType<T> = {
  data: T | null;
  loading: boolean | null;
  error: unknown;
  done: boolean;
  trigger: (...args: any[]) => Promise<void>;
};
type Options = {
  triggerOnMount?: boolean;
};

// when you buy a `useSWR` hook from AliExpress
function useFetch<T>(fn: (...args: any[]) => Promise<T>, defaultArgs?: any[], options?: Options): ReturnType<T> {
  const triggerOnMount = options?.triggerOnMount || false;

  const [data, setData] = useState<ReturnType<T>["data"]>(null);
  const [loading, setLoading] = useState<ReturnType<T>["loading"]>(null);
  const [error, setError] = useState<ReturnType<T>["error"]>();
  const [done, setDone] = useState<ReturnType<T>["done"]>(false);

  async function trigger(...customArgs: any[]): Promise<void> {
    try {
      setLoading(true);
      const result = await fn(...(customArgs || defaultArgs || []));
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
      trigger(...(defaultArgs || []));
    }
  }, []);

  return { data, loading, error, done, trigger };
}

export default useFetch;
