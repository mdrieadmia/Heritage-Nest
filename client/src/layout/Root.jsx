import { Outlet } from "react-router-dom";
import Menubar from "../components/Menubar/Menubar";
import Footer from "../components/Footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../authentication/AuthProvider";
import { TbFidgetSpinner } from "react-icons/tb";

const Root = () => {
    const { loading } = useContext(AuthContext)

    if (loading) {
        return <div className="h-screen w-full flex justify-center items-center">
            <TbFidgetSpinner className="animate-spin text-3xl text-orange-600" />
        </div>
    }
    
    return (
        <div>
            <div>
                <Menubar />
            </div>
            <div className="min-h-screen">
                <Outlet />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default Root;