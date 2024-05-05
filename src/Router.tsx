import { createHashRouter, RouterProvider } from "react-router-dom";
import App from "./components/layout/App.tsx";
import Profile from "./components/views/Profile.tsx";
import Portfolio from "./components/views/Portfolio.tsx";
import Contact from "./components/views/Contact.tsx";
import GraphicDesign from "./components/views/GraphicDesign.tsx";

const router = createHashRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Profile />,
            },
            {
                path: "portfolio",
                children: [
                    { index: true, element: <Portfolio /> },
                    { path: "graphic_design", element: <GraphicDesign /> },
                ],
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
