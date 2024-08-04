import {NavLink, Outlet } from "react-router-dom";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
function Layout() {
    return ( 
        <>
        <Navbar></Navbar>
        <div className="position-relative">
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
    </>
);
}

export default Layout;