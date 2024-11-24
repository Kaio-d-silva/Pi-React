import React from "react";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
} from "react-router-dom";
import Menu from "../pages/menu";
import Root from "../pages/root";
import Login from "../pages/login";
import Cadastro from "../pages/cadastro";
import CadastroTeste from "../pages/cadastroPaciente";
import MenuFuncionarios from "../pages/menu_funcionarios"
import path from "path";


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
    path: "cadastro",
    element: <CadastroTeste/>
  }
]

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Root/>}>
        {routes.map((route, index) => 
          <Route path={route.path} element={route.element} />
        )}
    </Route>
    </>
  )
);
export default router;
