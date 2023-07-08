import { useRoutes } from "react-router-dom";
import { LandingLayout } from "./layout/LandingLayout";
import { LandingPage } from "./views/_landingpage/LandingPage";

export default function Routes() {
    const elements = useRoutes([
        {
            path: "/",
            element: <LandingLayout />,
            children: [
                {
                    path: "/",
                    element: <LandingPage />
                }
            ]
        }
    ]);

    return elements
};

