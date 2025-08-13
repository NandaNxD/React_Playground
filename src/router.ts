import { createBrowserRouter, type RouteObject } from "react-router-dom";
import Playground from "./components/Playground/Playground";

const routes:RouteObject[]=[
    {
        path:'',
        Component:Playground
    }
]

export const router=createBrowserRouter(routes);