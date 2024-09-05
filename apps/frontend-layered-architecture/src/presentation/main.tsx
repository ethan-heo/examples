import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "react-redux";
import createStore from "../application/createStore.ts";
import "./reset.css";
import "@ethanheo/ui/styles/light-theme.css";
import "@ethanheo/ui/styles/components.css";

const store = createStore();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);
