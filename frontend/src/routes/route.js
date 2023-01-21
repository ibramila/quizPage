//! MAIN  PART
import MainRoot from "../pages/MainRoot";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Blog from "../pages/Blog";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Services from "../pages/Services"
import Add from "../pages/Add";
export const ROUTES = [
    {
        path: "/",
        element: <MainRoot />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "projects",
                element: <Projects />,
            },
            {
                path: "services",
                element: <Services />,
            },
            {
                path: "blog",
                element: <Blog />,
            },
            {
                path: "contact",
                element: <Contact />
            }, {
                path: "add",
                element: <Add />
            }
        ]
    }
];