import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../Pages/About";
import Blog from "../Pages/Blog";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login";
import MyReviews from "../Pages/MyReviews";
import ServiceDetails from "../Pages/ServiceDetails";
import Services from "../Pages/Services";
import SignUp from "../Pages/SignUp";
import PrivateRoute from "./PrivateRoute";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [{
            path: '/',
            element: <Home />
        },
        {
            path: '/home',
            loader: () => fetch('https://photoholic.vercel.app/services'),
            element: <Home />
        },
        {
            path: '/blog',
            element: < Blog />
        },
        {
            path: '/about',
            element: <About />
        },
        {
            path: '/services',
            loader: () => fetch('https://photoholic.vercel.app/allServices'),
            element: <Services />
        },
        {
            path: '/details/:id',
            loader: ({ params }) => fetch(`https://photoholic.vercel.app/services/${params.id}`),
            element: <ServiceDetails />
        },
        {
            path: '/login',
            element: <Login />
        },
        {
            path: '/signup',
            element: <SignUp />
        },
        {
            path: '/myReviews',
            element: <PrivateRoute> <MyReviews /></PrivateRoute>
        }

        ]
    }
]);

