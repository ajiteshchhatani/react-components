import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AccordionHome from "./components/Accordion/index.tsx";
import StarRating from "./components/Star_Rating/index.tsx";
import MultiStepForm from "./components/MultiStepForm/index.tsx";

const routes = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          index: true,
          element: <AccordionHome />,
        },
        {
          path: "star_rating",
          element: <StarRating />,
        },
        {
          path: "multi_step_form",
          element: <MultiStepForm />,
        },
      ],
    },
  ],
  {
    basename: import.meta.env.DEV ? "/" : "/react-components/",
  }
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
