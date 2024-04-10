import { useContext, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { HouseContext } from "../../Provider/Provider";
import AOS from 'aos';
import 'aos/dist/aos.css'


const Navbar = () => {
    useEffect(() => {
        AOS.init()
    }, [])
    const { user, logOut } = useContext(HouseContext);
    const handleLogOut = () => {
        logOut()
    }
    return (
        <div className="flex justify-between items-center bg-gray-100 px-4 p-2">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52">
                        <NavLink to={"/"} className={({ isActive }) =>
                            isActive ? "border bg-cyan-600 text-white rounded-md py-2 px-4" : "border border-cyan-600 rounded-md py-2 px-4"
                        }>Home</NavLink>
                        {
                            user ? <ul className="font-semibold flex flex-col">
                                <NavLink to={"/orders"} className={({ isActive }) =>
                                    isActive ? "border bg-cyan-600 text-white rounded-md py-2 px-4" : "border border-cyan-600 rounded-md py-2 px-4"
                                }>Orders</NavLink>
                                <NavLink to={"/update-profile"} className={({ isActive }) =>
                                    isActive ? "border bg-cyan-600 text-white rounded-md py-2 px-4" : "border border-cyan-600 rounded-md py-2 px-4"
                                }>Update Profile</NavLink>
                                <div className="flex gap-2 items-center">
                                    <NavLink to={"/user-profile"} className={({ isActive }) =>
                                        isActive ? "border bg-cyan-600 text-white rounded-md py-2 px-4" : "border border-cyan-600 rounded-md py-2 px-4"
                                    }>User Profile</NavLink>
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img alt="Tailwind CSS Navbar component" src={user?.photoURL} />
                                        </div>
                                    </div>
                                </div>

                                <button onClick={handleLogOut} className="btn text-white bg-red-600 font-bold">Log Out</button>
                            </ul>
                                : <div className="flex flex-col gap-2">
                                    <NavLink to={"/login"} className={({ isActive }) =>
                                        isActive ? "border bg-cyan-600 text-white rounded-md py-2 px-4" : "border border-cyan-600 rounded-md py-2 px-4"
                                    }>Login</NavLink>
                                    <NavLink to={"/register"} className={({ isActive }) =>
                                        isActive ? "border bg-cyan-600 text-white rounded-md py-2 px-4" : "border border-cyan-600 rounded-md py-2 px-4"
                                    }>Register</NavLink>
                                </div>
                        }
                    </ul>
                </div>
                <Link className="btn btn-ghost text-xl">Modern House</Link>
            </div>
            <div data-aos="slide-down" data-aos-duration="2000" className="hidden lg:flex gap-6 items-center font-semibold">
                <NavLink to={"/"} className={({ isActive }) =>
                    isActive ? "border bg-cyan-600 text-white rounded-md py-2 px-4" : "border border-cyan-600 rounded-md py-2 px-4"
                }>Home</NavLink>
                {
                    user ? <ul className=" flex gap-6 font-semibold items-center">
                        <NavLink to={"/orders"} className={({ isActive }) =>
                            isActive ? "border bg-cyan-600 text-white rounded-md py-2 px-4" : "border border-cyan-600 rounded-md py-2 px-4"
                        }>Orders</NavLink>
                        <NavLink to={"/update-profile"} className={({ isActive }) =>
                            isActive ? "border bg-cyan-600 text-white rounded-md py-2 px-4" : "border border-cyan-600 rounded-md py-2 px-4"
                        }>Update Profile</NavLink>
                        <div className="flex gap-2 items-center">
                            <NavLink to={"/user-profile"} className={({ isActive }) =>
                                isActive ? "border bg-cyan-600 text-white rounded-md py-2 px-4" : "border border-cyan-600 rounded-md py-2 px-4"
                            }>User Profile</NavLink>
                            <div className="tooltip tooltip-right" data-tip={user?.displayName}>
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img alt={user?.displayName} src={user?.photoURL} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button onClick={handleLogOut} className="btn text-white bg-red-600 font-bold">Log Out</button>
                    </ul>
                        : <div className=" flex gap-6">
                            <NavLink to={"/login"} className={({ isActive }) =>
                                isActive ? "border bg-cyan-600 text-white rounded-md py-2 px-4" : "border border-cyan-600 rounded-md py-2 px-4"
                            }>Login</NavLink>
                            <NavLink to={"/register"} className={({ isActive }) =>
                                isActive ? "border bg-cyan-600 text-white rounded-md py-2 px-4" : "border border-cyan-600 rounded-md py-2 px-4"
                            }>Register</NavLink>
                        </div>
                }
            </div>
        </div>
    );
};

export default Navbar;