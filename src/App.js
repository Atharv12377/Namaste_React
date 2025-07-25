import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantCard from "./components/RestaurantCard";
import RestaurantMenu from "./components/RestaurantMenu";
const Grocery = lazy(()=>import ("./components/Grocery"))
import {Provider} from "react-redux"
import appStore from "./Store/appStore";
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
  <Provider store={appStore}>
  <div className="App">
    <Header />
    <Outlet />
  </div>
  </Provider>
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
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<h1>Loading... </h1>}><Grocery/></Suspense>
      }
    ],
    errorElement: <Error />,
  }, 
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
