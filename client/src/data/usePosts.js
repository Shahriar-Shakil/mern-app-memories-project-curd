import useSWR from "swr";

export function usePosts() {
  const { data, error, mutate } = useSWR("/posts");

  return {
    data: data,
    loading: !data && !error,
    error,
    mutate,
  };
}
