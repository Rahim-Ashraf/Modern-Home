import { useContext, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { HouseContext } from "../../Provider/Provider";
import { Helmet } from "react-helmet-async";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";


const Login = () => {
    useEffect(() => {
        AOS.init()
    }, [])
    const notifyLoginSuccess = () => toast.success("Loged in successfully");
    const notifyLoginError = () => toast.error("Please provide valid email and password");
    const navigate = useNavigate()
    const location = useLocation()
    const { login, googleLogin, githubLogin } = useContext(HouseContext)
    const handleEmailLogin = e => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        login(email, password)
            .then(res => {

                navigate(location?.state ? location.state : "/")
                notifyLoginSuccess()

            })
            .catch(err => {

                notifyLoginError()
            })
    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then(res => {
                navigate(location?.state ? location.state : "/")
                notifyLoginSuccess()
            })
            .catch(err => {
                notifyLoginError()

            })

    }
    const handleGithubLogin = () => {
        githubLogin()
            .then(res => {
                navigate(location?.state ? location.state : "/")
                notifyLoginSuccess()
            })
            .catch(err => {
                notifyLoginError()
            })
    }
    return (
        <div data-aos="fade-up" data-aos-duration="2000" className="card shrink-0 shadow-2xl bg-base-100 w-full md:w-2/3 lg:w-1/2 mx-auto">
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
                        <input type="password" name="password" placeholder="password" className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <div>
                    <p className="flex gap-2">
                        <span>Login with</span> <button onClick={handleGoogleLogin} className="text-blue-600 font-bold flex items-center"><FcGoogle /><span>oogle</span></button>
                    </p>
                    <p className="flex gap-2">
                        <span>Login with</span> <button onClick={handleGithubLogin} className="text-blue-600 font-bold flex items-center"><FaGithub /><span>Github</span></button>
                    </p>
                </div>
                <div>
                    <span>New here?</span>
                    <Link to={"/register"} className="text-cyan-600 font-bold"> Register Now</Link>
                </div>
            </div>

        </div>
    );
};

export default Login;