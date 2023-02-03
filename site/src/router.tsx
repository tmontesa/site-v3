import { createBrowserRouter} from "react-router-dom";
import { ContactPage } from "./routes/contact";
import { EducationPage } from "./routes/education";
import { ExperiencePage } from "./routes/experience";
import { ProjectPage } from "./routes/project";
import Root from "./routes/root";

export const router = createBrowserRouter([
    {
        element: <Root />,
        errorElement: <Root />,
        children: [
            {
                path: "/",
                element: <ContactPage />,
            },
            {
                path: "/contact",
                element: <ContactPage />,
            },
            {
                path: "/education",
                element: <EducationPage />,
            },
            {
                path: "/experience",
                element: <ExperiencePage />,
            },
            {
                path: "/projects",
                element: <ProjectPage />,
            }
        ]
    }
]);