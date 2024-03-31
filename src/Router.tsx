import { createHashRouter, RouterProvider } from "react-router-dom";
import App from "./components/layout/App.tsx";
import AboutMe from "./components/views/AboutMe.tsx";
import Technologies from "./components/views/Technologies.tsx";
import Experience from "./components/views/Experience.tsx";
import Education from "./components/views/Education.tsx";
import Contact from "./components/views/Contact.tsx";

const router = createHashRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <AboutMe />,
            },
            {
                path: "experience",
                element: <Experience />,
            },
            {
                path: "education",
                element: <Education />,
            },
            {
                path: "tech",
                element: <Technologies />,
            },
            {
                path: "contact",
                element: <Contact />,
            },
        ],
    },
]);

const Router = () => <RouterProvider router={router} />;

export default Router;
