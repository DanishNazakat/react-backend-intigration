import {NavLink , Outlet} from "react-router";


const MainLayout=()=>{
    return(
        <div>
        <nav style={{ display: "flex" , gap: "16px", marginBottom: "20px" }}>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/About">About</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/Signup">Signup</NavLink>
        </nav>
        <Outlet />
    </div>
    )
}


export default MainLayout;