import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Buy from "../pages/Buy/Buy";

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
            }
        ]
    }
])

export default Routes;