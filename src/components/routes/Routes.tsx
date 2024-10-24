import { createBrowserRouter, Outlet } from "react-router-dom"
import App from "../../App";
import Dashbord from "../../pages/dashbord/Dashbord";
import Users from "../../pages/users/Users";
import UsersDetails from "../../pages/users-details/UsersDetails";

const routes = createBrowserRouter([
    {
        path: "/",
        children: [
            {
                index: true,
                element: <App />,
            },
            {
                path: "me",
                element: <Dashbord />,
                children: [
                    {
                        path: "users",
                        element: <Users />,
                    },
                    {
                        path: "users/:userId",
                        element: <UsersDetails />,
                    },
                ],
            },
        ],
    },
]);

export { routes }
