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
            <div className="max-w-[1240px] mx-auto p-4">
                <div className="card shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="lg:flex gap-4 justify-center">
                            <div className="space-y-4">
                                <h2 className="text-3xl font-bold">Name: {user?.displayName}</h2>
                                <h2>Email: {user?.email}</h2>
                            </div>
                            <div className="max-w-[600px] rounded-lg shadow-sm mb-4">
                                <img className="rounded-lg shadow-2xl shadow-black" src={user?.photoURL} alt={user?.displayName} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;