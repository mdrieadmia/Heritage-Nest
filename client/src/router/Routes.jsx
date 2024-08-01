import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Buy from "../pages/Buy/Buy";
import PropertyDetails from "../pages/PropertyDetails/PropertyDetails";
import Signin from "../pages/Signin/Signin";
import Signup from "../pages/SignUp/Signup";

const Routes = createBrowserRouter([
    {
        path : '/',
        element : <Root/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                index : true,
                element : <Home/>
            },
            {
                path:'/about',
                element : <About/>
            },
            {
                path:'/buy',
                element : <Buy/>
            },
            {
                path:'/details',
                element : <PropertyDetails/>
            },
            {
                path:'/signin',
                element : <Signin/>
            },
            {
                path:'/register',
                element : <Signup />
            }
        ]
    }
])

export default Routes;