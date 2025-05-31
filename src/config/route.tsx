import React from "react";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
} from "react-router-dom";
import Root from "../components/root";
import Login from "../views/Login";
import CadastroPaciente from "../views/CadastroPaciente";
import CadastroProfissional from "../views/CadastroProfissional";
import MenuFuncionarios from "../components/MenuFuncionarios"
import Formulario from "../views/ControleDialise";
import ControleGlicemiaForm from "../views/ControleGlicemia";
import ContainerFormularios from "../components/ContainerFormularios";
import FormResultSimple from "../components/PadraoFormularioSimples";
// import path from "path";
// import { emitKeypressEvents } from "readline";


const routes = [
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
  {
    path: "/dados",
    element: < FormResultSimple/>

  }
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
      <Route path="/glicemia" element={<ControleGlicemiaForm />} />
      <Route path="/formularios" element={<ContainerFormularios />} />
      <Route path="/" element={<Root/>}>
        {routes.map((route, index) => 
          <Route path={route.path} element={route.element} />
        )}
    </Route>
    </>
  )
);
export default router;