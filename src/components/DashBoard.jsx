import { Outlet } from "react-router-dom";
import NavBar from "./navBar/NavBar";

function DashBoard() {
  return (
    <div>
       <NavBar/> 
        <Outlet/>
    </div>
  );
}

export default DashBoard;