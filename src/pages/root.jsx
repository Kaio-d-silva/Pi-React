import { Outlet } from "react-router-dom";
import MiniDrawer from "./menuFuncionarios";

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
