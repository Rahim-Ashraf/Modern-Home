import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { HouseContext } from "../../Provider/Provider";



const UpdateProfile = () => {
    const { updateUser } = useContext(HouseContext)

    const handleProfileUpdate = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const photoURL = e.target.photoURL.value
        console.log(name,photoURL)
        updateUser(name, photoURL)
            .then(res => console.log("update successfully"))
    }

    return (
        <div>
            <Helmet>
                <title>Modern House | Update profile</title>
            </Helmet>

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
        </div>
    );
};

export default UpdateProfile;