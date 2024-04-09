import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { HouseContext } from "../../Provider/Provider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet-async";
import { FaEye } from "react-icons/fa";
import { IoMdEyeOff } from "react-icons/io";


const Register = () => {
    const [showPass, setShowPass] = useState(true);
    const { register } = useContext(HouseContext);
    const [registerError, setRegisterError] = useState("")
    const [registerSuccess, setRegisterSuccess] = useState("")

    const notify = () => toast.success(registerSuccess);

    const handleEmailRegister = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        const photoURL = e.target.photoURL.value;



        if (password.length < 6) {
            setRegisterError("password should be atlest 6 charecter");
            return
        } else if (!/[A-Z]/.test(password)) {
            setRegisterError("password should have atlast 1 uppercase charecter");
            return
        } else if (!/[a-z]/.test(password)) {
            setRegisterError("password should have atlast 1 lowercase charecter");
            return
        }

        register(email, password)
            .then(res => {
                return res.user.updateProfile({
                    displayName: name
                })
            })
            .catch(err => {

            })
        setRegisterSuccess("Loged in successfully");
        notify();
    }
    return (
        <div className="card  shadow-2xl bg-base-100 w-full md:w-2/3 lg:w-1/2 mx-auto">
            <Helmet>
                <title>Modern House | Register</title>
            </Helmet>
            <div className="card-body">
                <form onSubmit={handleEmailRegister}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">photoURL</span>
                        </label>
                        <input type="text" name="photoURL" placeholder="photoURL" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <div className="relative">
                            <span onClick={() => setShowPass(!showPass)} className="absolute right-2 top-4">{showPass ? <FaEye /> : <IoMdEyeOff />}</span>
                            <input type={showPass ? "password" : "text"} name="password" placeholder="password" className="input input-bordered w-full" required />
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <button type="submit" className="btn btn-primary">Register</button>
                    </div>
                    <ToastContainer />
                </form>
                <p className="text-red-600">
                    {registerError}
                </p>
                <p className="text-green-600">
                    {registerSuccess}
                </p>
                <div>
                    <span>Alredy Have an Account?</span>
                    <Link to={"/login"} className="text-blue-600 font-bold"> Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Register;