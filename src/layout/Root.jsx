import { Outlet } from "react-router-dom";
import Nav from "../components/header/Nav";
import Footer from "../components/footer/Footer";

const Root = () => {
    return (
        <div>
           <Nav></Nav>
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default Root;