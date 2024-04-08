import {
  createBrowserRouter,
} from "react-router-dom";
import Root from "../components/Root/Root";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import UserProfile from "../components/UserProfile/UserProfile"
import UpdateProfile from "../components/UpdateProfile/UpdateProfile";
import CardDetails from "../components/CardDetails/CardDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/user-profile",
        element: <UserProfile></UserProfile>
      },
      {
        path: "/update-profile",
        element: <UpdateProfile></UpdateProfile>
      },
      {
        path: "/details/:id",
        element: <CardDetails></CardDetails>
      }
    ]
  },
]);

export default router;