import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div className="card shrink-0 shadow-2xl bg-base-100 w-full md:w-2/3 lg:w-1/2 mx-auto">
            <form className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" className="input input-bordered" required />
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