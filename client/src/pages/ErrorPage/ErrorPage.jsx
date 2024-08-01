import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Menubar from "../../components/Menubar/Menubar";

const ErrorPage = () => {
    return (
        <div>
            <Menubar />
            <div className="h-screen w-full flex justify-center items-center flex-col">
                <h1 className="text-5xl font-semibold text-red-500 text-center -mt-56">404</h1>
                <p className="text-lg font-semibold text-red-500 text-center mt-3">Something Went Wrong</p>
                <div className="flex justify-center items-center mt-5">
                    <Link to={'/'} className="px-8 py-2 bg-blue-400 hover:bg-blue-600 text-white rounded-lg duration-100"> Home </Link>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ErrorPage;