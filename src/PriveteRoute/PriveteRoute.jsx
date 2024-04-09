import { useContext } from "react";
import { HouseContext } from "../Provider/Provider";
import { Navigate } from "react-router-dom";


const PriveteRoute = ({ children }) => {
    const { user } = useContext(HouseContext)

    return (
        <div>
            {user ? children : <Navigate to={"/login"}></Navigate>}
        </div>
    );
};

export default PriveteRoute;