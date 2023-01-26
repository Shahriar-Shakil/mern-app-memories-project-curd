import { mutate } from "swr";
import { api } from "../api";

export async function addPosts(data, loading, resetForm) {
  loading(true);

  try {
    await api.post(`/posts`, data);
    resetForm();
    mutate("/posts");
  } catch (error) {
    console.error(`addPosts error: ${error}`);
    // const { data } = error.response ?? {};
  } finally {
    loading(false);
  }
}
