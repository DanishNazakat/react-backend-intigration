import React from "react";
import { RouterProvider } from "react-router";
import router from "./router"
import Home from "./containers/Home/Home";



function App(){
  return(
    <>
    {/* <Home /> */}
      <RouterProvider router={router} />
    </>
  )
}

export default App;