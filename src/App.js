import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantCard from "./components/RestaurantCard";
import RestaurantMenu from "./components/RestaurantMenu";
/*
 * Header
 * - Logo
 * - Nav Items
 * Body
 * - Search
 * - Card/Restaurent Container
 * -- Restaurent Card - img, name of res, cuisine, delivery time
 *
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact
 */

const AppLayout = () => (
  <div className="App">
    <Header />
    <Outlet />
  </div>
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resid",
        element: <RestaurantMenu/>
      }
    ],
    errorElement: <Error />,
  }, 
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
