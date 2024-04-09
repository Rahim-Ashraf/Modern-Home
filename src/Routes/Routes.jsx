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
import PriveteRoute from "../PriveteRoute/PriveteRoute";
import ErrorPage from "../components/ErrorPage/ErrorPage";

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
        element: <PriveteRoute><UserProfile></UserProfile></PriveteRoute>
      },
      {
        path: "/update-profile",
        element: <PriveteRoute><UpdateProfile></UpdateProfile></PriveteRoute>
      },
      {
        path: "/details/:id",
        element: <PriveteRoute><CardDetails></CardDetails></PriveteRoute>
      }
    ],
    errorElement: <ErrorPage></ErrorPage>
  },
]);

export default router;