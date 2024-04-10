import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { HouseContext } from "../../Provider/Provider";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from "react-hook-form"


const UpdateProfile = () => {
    const { updateUser, user } = useContext(HouseContext)

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()
    const onProfileUpdateSubmit = (data) => {
        const { name, photoURL } = data;
        console.log(name, photoURL)
        updateUser(name, photoURL)
            .then(res => {
                const notify = () => toast.success("Profile updated successfully")
                notify()
                reset()
            })
    }

    return (
        <div>
            <Helmet>
                <title>Modern House | Update profile</title>
            </Helmet>
            <div className="max-w-[1240px] mx-auto p-4">
                <div className="card shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="lg:flex gap-4 justify-center">
                            <div className="max-w-[600px] rounded-lg shadow-sm mb-4">
                                <img className="rounded-lg shadow-2xl shadow-black" src={user?.photoURL} alt={user?.displayName} />
                            </div>
                            <div className="space-y-4">
                                <h2 className="text-3xl font-bold">Name: {user?.displayName}</h2>
                                <h2>Email: {user?.email}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero-content mx-auto">
                <div className="card shrink-0 w-full shadow-2xl bg-base-100">
                    <h2 className="text-4xl font-bold m-10">Update your profile</h2>
                    <form onSubmit={handleSubmit(onProfileUpdateSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Name</span>
                            </label>
                            <input placeholder="Enter new name" {...register("name", { required: true })} className="input input-bordered" />
                            {errors.name && <span className="text-red-600">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">PhotoURL</span>
                            </label>
                            <input placeholder="Enter new photoURL" {...register("photoURL", { required: true })} className="input input-bordered" />
                            {errors.photoURL && <span className="text-red-600">This field is required</span>}
                        </div>
                        <input type="submit" value={"Update"} className="btn btn-primary" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;