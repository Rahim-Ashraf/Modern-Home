import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { HouseContext } from "../../Provider/Provider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const UpdateProfile = () => {
    const { updateUser, user } = useContext(HouseContext)
    const handleProfileUpdate = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const photoURL = e.target.photoURL.value
        console.log(name, photoURL)
        updateUser(name, photoURL)
            .then(res => {
                const notify = () => toast.success("Profile updated successfully")
                notify()
            })
    }

    return (
        <div>
            <Helmet>
                <title>Modern House | Update profile</title>
            </Helmet>
            <div className="flex justify-center">
                <div className="space-y-4">
                    <h2 className="text-3xl font-bold">Name: {user?.displayName}</h2>
                    <h2>Email: {user?.email}</h2>
                    <div className="max-w-96">
                        <img src={user?.photoURL} alt={user?.displayName} />
                    </div>
                </div>
            </div>
            <div className="hero-content mx-auto">
                <div className="card shrink-0 w-full shadow-2xl bg-base-100">
                    <h2 className="text-4xl font-bold m-10">Update your profile</h2>
                    <form onSubmit={handleProfileUpdate} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Enter new name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">PhotoURL</span>
                            </label>
                            <input type="text" name="photoURL" placeholder="Enter new photoURL" className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Update</button>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer />

        </div>
    );
};

export default UpdateProfile;