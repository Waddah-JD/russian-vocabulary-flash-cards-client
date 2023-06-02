/* eslint-disable @typescript-eslint/no-explicit-any */
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
  deps?: any[];
};

// when you buy a `useSWR` hook from AliExpress
function useFetch<T>(fn: (...args: any[]) => Promise<T>, options?: Options): ReturnType<T> {
  const triggerOnMount = options?.triggerOnMount || false;

  const [data, setData] = useState<ReturnType<T>["data"]>(null);
  const [loading, setLoading] = useState<ReturnType<T>["loading"]>(null);
  const [error, setError] = useState<ReturnType<T>["error"]>();
  const [done, setDone] = useState<ReturnType<T>["done"]>(false);

  async function trigger(): Promise<void> {
    try {
      setLoading(true);
      const result = await fn();
      setData(result);
      setDone(true);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    setDone(false);
    setLoading(false);
    setData(null);
    setError(null);
    if (triggerOnMount) {
      trigger();
    }
  }, [...(options?.deps || [])]);

  return { data, loading, error, done, trigger };
}

export default useFetch;
