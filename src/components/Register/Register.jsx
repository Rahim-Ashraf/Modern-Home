import { useContext } from "react";
import { Link } from "react-router-dom";
import { HouseContext } from "../../Provider/Provider";


const Register = () => {
    const { register } = useContext(HouseContext);
    const handleEmailRegister = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        register(email, password)
        .then(res => {
            console.log(res)
        })
        .catch(err =>{
            console.error(err)
        })
    }
    return (
        <div className="card shrink-0 shadow-2xl bg-base-100 w-full md:w-2/3 lg:w-1/2 mx-auto">
            <form onSubmit={handleEmailRegister} className="card-body">
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
                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    <label>
                        <span>Alredy Have an Account?</span>
                        <Link to={"/login"} className="text-blue-600 font-bold"> Login</Link>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Register</button>
                </div>

            </form>
        </div>
    );
};

export default Register;