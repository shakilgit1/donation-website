import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Header/navBar";

const MainLayout = () => {
    return (
        <div>
           <Navbar></Navbar>
           <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;