import { Outlet } from "react-router-dom";
import Menubar from "../components/Menubar/Menubar";
import Footer from "../components/Footer/Footer";

const Root = () => {
    return (
        <div>
            <div>
                <Menubar/>
            </div>
            <div className="min-h-screen">
                <Outlet/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    );
};

export default Root;