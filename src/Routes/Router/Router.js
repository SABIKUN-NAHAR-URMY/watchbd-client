import { createBrowserRouter } from "react-router-dom";
import Blog from "../../pages/Blog/Blog";
import DashboardLayout from "../../pages/DashboardLayout/DashboardLayout";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Main from "../../pages/Main/Main";
import Products from "../../pages/Products/Products";
import Signup from "../../pages/Signup/Signup";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/products/:id',
                element: <PrivateRoute><Products></Products></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            }
        ]
    },
    {
        path:'/dashboard',
        element: <DashboardLayout></DashboardLayout>
        // errorElement: <ErrorPage></ErrorPage>,
        // children:[
        //     {
        //         path:'/dashboard',
        //         element: 
        //     }
            // {
            //     path:'/dashboard/allusers',
            //     element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            // },
            // {
            //     path:'/dashboard/adddoctor',
            //     element: <AdminRoute><AddDoctor></AddDoctor></AdminRoute>
            // },
            // {
            //     path:'/dashboard/manageDoctors',
            //     element: <AdminRoute><ManageDoctor></ManageDoctor></AdminRoute>
            // },
            // {
            //     path:'/dashboard/payment/:id',
            //     element: <Payment></Payment>,
            //     loader: ({params}) => fetch(`http://localhost:5000/bookings/${params.id}`)
            // }
        // ]
    }
])