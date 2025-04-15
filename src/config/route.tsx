import React from "react";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
} from "react-router-dom";
import Menu from "../pages/menuPaciente";
import Root from "../pages/root";
import Login from "../pages/login";
import CadastroPaciente from "../pages/cadastroPaciente";
import CadastroProfissional from "../pages/cadastroProfissional";
import MenuFuncionarios from "../pages/menuFuncionarios"
import Formulario from "../pages/formulario";

// import path from "path";
// import { emitKeypressEvents } from "readline";


const routes = [
  {
    path: "menu",
    element: <Menu />
  },
  {
    path: "menuFuncionarios",
    element: <MenuFuncionarios/>
  },
  {
    path: "cadastroPaciente",
    element: <CadastroPaciente/>
  },
  {
    path: "cadastroProfissional",
    element: <CadastroProfissional/>
  },
  // {
  //   path: "formulario",
  //   element: <Formulario/>
  // }
]

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/login" element={<Login />} />
      <Route path="/formulario" element={<Formulario />} />
      <Route path="/" element={<Root/>}>
        {routes.map((route, index) => 
          <Route path={route.path} element={route.element} />
        )}
    </Route>
    </>
  )
);
export default router;
