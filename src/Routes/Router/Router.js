import { createBrowserRouter } from "react-router-dom";
import AddProduct from "../../pages/AddProduct/AddProduct";
import AllBuyers from "../../pages/AllBuyers/AllBuyers";
import AllSellers from "../../pages/AllSellers/AllSellers";
import Blog from "../../pages/Blog/Blog";
import DashboardLayout from "../../pages/DashboardLayout/DashboardLayout";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Main from "../../pages/Main/Main";
import MyOrders from "../../pages/MyOrders/MyOrders";
import MyProduct from "../../pages/MyProduct/MyProduct";
import Payment from "../../pages/Payment/Payment";
import Products from "../../pages/Products/Products";
import ErrorPage from "../../pages/Shared/ErrorPage/ErrorPage";
import Signup from "../../pages/Signup/Signup";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
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
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path:'/dashboard/myOrders',
                element: <MyOrders></MyOrders>  
            },
            {
                path:'/dashboard/allSellers',
                element: <AllSellers></AllSellers>
            },
            {
                path:'/dashboard/allBuyers',
                element: <AllBuyers></AllBuyers>
            },
            {
                path:'/dashboard/addProduct',
                element: <AddProduct></AddProduct>
            },
            {
                path:'/dashboard/myProduct',
                element: <MyProduct></MyProduct>
            },
            {
                path:'/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: ({params})=>fetch(`http://localhost:5000/bookings/${params.id}`)
            }
            
        ]
    }
])