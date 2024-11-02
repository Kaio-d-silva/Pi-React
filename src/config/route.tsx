import React from "react";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
} from "react-router-dom";
import Menu from "../pages/menu";
import Root from "../pages/root";
import Login from "../pages/login";


const routes = [
  {
    path: "/",
    element: <Root />
  },
  {
    path: "login",
    element: <Login />
  },
  {
    path: "menu",
    element: <Menu />
  },
]

const router = createBrowserRouter(
  createRoutesFromElements(
    (routes.map((route, index) => {
      return <Route path={route.path} element={route.element} />
    }))
  )
);
export default router;
