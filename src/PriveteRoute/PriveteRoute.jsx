import { useContext } from "react";
import { HouseContext } from "../Provider/Provider";
import { Navigate } from "react-router-dom";


const PriveteRoute = ({ children }) => {
    const { user, loader } = useContext(HouseContext)

    return (
        <div>
            {loader ? <div className="w-full flex justify-center"><span className="loading loading-spinner loading-lg flex justify-center items-center h-screen"></span></div> : user ? children : <Navigate to={"/login"}></Navigate>}
            { }
        </div>
    );
};

export default PriveteRoute;