import React from "react";
import {
    createBrowserRouter,
    redirect,
} from "react-router-dom";
import Landing from "../pages/Landing";
import Table from "../pages/Table";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddFood from "../pages/AddFood";
import AddCategory from "../pages/AddCategory";
import Category from "../pages/Category";
import EditFood from "../pages/EditFood";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Landing />,
        children: [
            {
                path: "/",
                element: <Table />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path:'/add-food',
                element:<AddFood/>
            },
            {
                path:'/add-category',
                element:<AddCategory/>
            },
            {
                path: '/category',
                element: <Category/>
            },
            {
                path: '/item/:id',
                element: <EditFood/>
            },
        ],
            loader: () => {
            if (!localStorage.getItem("access_token")) {
                throw redirect("/login")
            } 
            return null
        },
    },
    {
        path: '/login',
        element: <Login />
    },
]);

export default router;