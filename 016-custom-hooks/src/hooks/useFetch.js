import { useEffect, useState } from "react";

export function useFetch(fetcFn, initialValue) {
  const [isFetching, setIsFetching] = useState();
  const [error, setError] = useState();
  const [fetchedData, setFetchedData] = useState(initialValue);

  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);
      try {
        const data = await fetcFn();
        setFetchedData(data);
      } catch (error) {
        setError({ message: error.message || "Failed to fetch user data." });
      }

      setIsFetching(false);
    }

    fetchData();
  }, [fetcFn]);

  return {
    isFetching,
    fetchedData,
    setFetchedData,
    error,
  };
}
