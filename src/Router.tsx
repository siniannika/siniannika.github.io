import { createHashRouter, RouterProvider } from "react-router-dom";
import App from "./components/layout/App.tsx";
import Profile from "./components/views/Profile.tsx";
import Portfolio from "./components/views/Portfolio.tsx";
import Contact from "./components/views/Contact.tsx";
import PortfolioSection from "./components/views/PortfolioSection.tsx";

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
                    { path: ":section", element: <PortfolioSection /> },
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
