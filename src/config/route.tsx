import {Navigate} from "react-router-dom";
import Login from "../views/Login";
import CadastroProfissional from "../views/CadastroProfissional";
import Formulario from "../views/ControleDialise";
import ControleGlicemiaForm from "../views/ControleGlicemia";
import ContainerFormularios from "../components/ContainerFormularios";
import RestrictedLayout from "../layout/RestrictedLayout";
import PerfilPaciente from "../views/PerfilPaciente";


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
        element: <PerfilPaciente />
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