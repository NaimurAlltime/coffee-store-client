import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddCoffee from "./components/AddCoffee/AddCoffee.jsx";
import Home from "./components/Home/Home.jsx";
import UpdateCoffee from "./components/UpdateCoffee/UpdateCoffee.jsx";
import "./index.css";
import Main from "./layouts/Main.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/coffee"),
      },
      {
        path: "/add-coffee",
        element: <AddCoffee></AddCoffee>,
      },
      {
        path: "/coffee/update/:id",
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/coffee/${params.id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
