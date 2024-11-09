import { Outlet } from "react-router-dom";
import MiniDrawer from "./menu_funcionarios";

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
