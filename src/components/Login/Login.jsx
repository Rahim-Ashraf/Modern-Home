import { useContext } from "react";
import { Link } from "react-router-dom";
import { HouseContext } from "../../Provider/Provider";
import { Helmet } from "react-helmet-async";


const Login = () => {
    const { login, googleLogin, githubLogin } = useContext(HouseContext)
    const handleEmailLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        login(email, password)
            .then(res => {

            })
            .catch(err => {

            })
    }

    const handleGoogleLogin = () => {
        googleLogin()
    }
    const handleGithubLogin = () => {
        githubLogin()
    }
    return (
        <div className="card shrink-0 shadow-2xl bg-base-100 w-full md:w-2/3 lg:w-1/2 mx-auto">
            <Helmet>
                <title>Modern House | login</title>
            </Helmet>
            <div className="card-body">
                <form onSubmit={handleEmailLogin}>
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
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <div>
                    <p>
                        Register with <button onClick={handleGoogleLogin} className="text-blue-600 font-bold">Google</button>
                    </p>
                    <p>
                        Register with <button onClick={handleGithubLogin} className="text-blue-600 font-bold">Github</button>
                    </p>
                </div>
                <div>
                    <span>New here?</span>
                    <Link to={"/register"} className="text-blue-600 font-bold"> Register Now</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;