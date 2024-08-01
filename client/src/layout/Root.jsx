import { Outlet } from "react-router-dom";
import Menubar from "../components/Menubar/Menubar";
import Footer from "../components/Footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../authentication/AuthProvider";
import { TbFidgetSpinner } from "react-icons/tb";

const Root = () => {
    const { loading } = useContext(AuthContext)

    if (loading) {
        return <div className="h-[600px] w-full flex justify-center items-center">
            <TbFidgetSpinner className="animate-spin mr-3 mb-1 text-4xl text-orange-600" />
            <p>Please wait some moment...</p>
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