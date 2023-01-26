import { mutate } from "swr";
import { api } from "../api";

export async function deletePosts(id) {
  try {
    await api.delete(`/posts/${id}`);
    mutate("/posts");
  } catch (error) {
    console.error(`deletePosts error: ${error}`);
    // const { data } = error.response ?? {};
  }
}
