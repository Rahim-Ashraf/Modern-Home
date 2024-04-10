import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { HouseContext } from "../../Provider/Provider";


const UserProfile = () => {
    const { user } = useContext(HouseContext)
    return (
        <div>
            <Helmet>
                <title>Modern House | User profile</title>
            </Helmet>
            <div>
                <div className="space-y-4 m-4">
                    <h2 className="text-3xl font-bold">Name: {user?.displayName}</h2>
                    <h2>Email: {user?.email}</h2>
                    <div>
                        <img src={user?.photoURL} alt={user?.displayName} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;