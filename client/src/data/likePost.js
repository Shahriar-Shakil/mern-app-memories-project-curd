import { mutate } from "swr";
import { api } from "../api";

export async function likePost(id) {
  try {
    await api.patch(`/posts/${id}/likePost`);
    mutate("/posts");
  } catch (error) {
    console.error(`likePost error: ${error}`);
    // const { data } = error.response ?? {};
  }
}
