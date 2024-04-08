import { useContext } from "react";
import { Link } from "react-router-dom";
import { HouseContext } from "../../Provider/Provider";


const Login = () => {
    const { login } = useContext(HouseContext)
    const handleEmailLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        login(email, password)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.error(err)
            })
    }
    return (
        <div className="card shrink-0 shadow-2xl bg-base-100 w-full md:w-2/3 lg:w-1/2 mx-auto">
            <form onSubmit={handleEmailLogin} className="card-body">
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
                        <span>New here?</span>
                        <Link to={"/register"} className="text-blue-600 font-bold"> Register Now</Link>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
            </form>
        </div>
    );
};

export default Login;