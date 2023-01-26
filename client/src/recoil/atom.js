import { atom } from "recoil";

const selectedPostId = atom({
  key: "selectedPostId",
  default: "",
});

export { selectedPostId };
