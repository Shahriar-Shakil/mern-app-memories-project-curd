import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { SWRConfig } from "swr";
import { api } from "./api";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { RecoilRoot } from "recoil";
const fetcher = (url) => api.get(url).then((r) => r.data);
const options = {
  shouldRetryOnError: false,
  revalidateOnFocus: false,
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <SWRConfig value={{ fetcher, options }}>
        <App />
      </SWRConfig>
    </RecoilRoot>
  </React.StrictMode>
);
