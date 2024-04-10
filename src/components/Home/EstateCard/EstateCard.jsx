import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";


const EstateCard = ({ estateData }) => {
    const { image, id, estate_title, status, price, segment_name, location } = estateData
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{estate_title}</h2>
                <div className="flex justify-between font-semibold">
                    <p>segment name: {segment_name}</p>
                    <div className="flex gap-2 items-center">
                        <CiLocationOn />
                        <p>{location}</p>
                    </div>
                </div>
                <div className="flex justify-between font-semibold">
                    <p>Status: {status}</p>
                    <div>
                        <p className="font-bold text-cyan-600">{price}</p>
                    </div>
                </div>
                <Link to={`details/${id}`} className="btn btn-primary">View Property</Link>
            </div>
        </div>
    );
};

export default EstateCard;