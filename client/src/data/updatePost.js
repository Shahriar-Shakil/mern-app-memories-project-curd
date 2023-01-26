import { mutate } from "swr";
import { api } from "../api";

export async function updatePosts(id, data, loading, resetForm) {
  loading(true);
  try {
    await api.patch(`/posts/${id}`, data);
    resetForm();
    mutate("/posts");
  } catch (error) {
    console.error(`updatePosts error: ${error}`);
    // const { data } = error.response ?? {};
  } finally {
    loading(false);
  }
}
