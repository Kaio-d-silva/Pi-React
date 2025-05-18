import { Outlet } from "react-router-dom";
import MiniDrawer from "../views/MenuFuncionarios";

const Root = () => {
  return (
    <>
    <MiniDrawer>
    <Outlet />
    </MiniDrawer>
      
    </>
  );
};
export default Root;
