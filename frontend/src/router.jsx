import { createBrowserRouter } from "react-router";
import MainLayout from "./layout/mainLayout";
import Home from "./containers/Home/Home";
import About from "./containers/Home/About/About";
import Login from "./containers/login/login";
import Signup from "./containers/signup/signup";



const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement:<>404 Error not found</>,
        children:[
            {index: true, element : <Home />},
            {path: "about", element : <About />},
            {path: "login" , element : <Login />},
            {path: "signup" , element : <Signup />}
        ]
    }
])


export default router;