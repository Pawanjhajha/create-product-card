import { createBrowserRouter, RouterProvider } from "react-router-dom";
import allRoutes from './RouteListing'
const Routes=()=>{
    let route=createBrowserRouter(allRoutes)
    return <RouterProvider router={route}/>
}

export default Routes;