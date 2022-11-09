import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../Pages/Home/About";
import Blog from "../Pages/Home/Blog";
import Home from "../Pages/Home/Home";

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
            loader: () => fetch('http://localhost:5000/services'),
            element: <Home />
        },
        {
            path: '/blog',
            element: <Blog />
        },
        {
            path: '/about',
            element: <About />
        }]
    }
]);

