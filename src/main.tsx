import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Pages/Home/Home.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Analytics from "./Pages/Analytics/Analytics.tsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/analytics",
    element: <Analytics />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* Providing the Redux Store to react */}
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
