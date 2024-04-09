import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <Helmet>
                <title>Modern House | Error</title>
            </Helmet>
            <div>
            <p className="tex-4xl font-bold">OPPS</p>
            <p>This page not found</p>
            <Link to={"/"} className="btn border border-cyan-600 rounded-md">Home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;