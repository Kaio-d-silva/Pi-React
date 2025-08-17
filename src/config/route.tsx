import {Navigate} from "react-router-dom";
import Login from "../views/Login";
import CadastroPaciente from "../views/CadastroPaciente";
import CadastroProfissional from "../views/CadastroProfissional";
import Formulario from "../views/ControleDialise";
import ControleGlicemiaForm from "../views/ControleGlicemia";
import ContainerFormularios from "../components/ContainerFormularios";
import RestrictedLayout from "../layout/RestrictedLayout";


export interface RouteConfig {
  path: string;
  element: React.ReactElement;
  children?: RouteConfig[];
}

const routes: RouteConfig[] = [
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/",
    element: <RestrictedLayout />,
    children: [
      {
        path: "cadastroPaciente",
        element: <CadastroPaciente />
      },
      {
        path: "cadastroProfissional",
        element: <CadastroProfissional />
      },

    ]
  },
  {
    path: "/formularios",
    element: <ContainerFormularios />
  },
  {
    path: "/formulario",
    element: <Formulario />
  },
  {
    path: "/glicemia",
    element: <ControleGlicemiaForm />
  },
  {
    path: "*",
    element: <Navigate to="/" replace />
  }
]

export default routes;