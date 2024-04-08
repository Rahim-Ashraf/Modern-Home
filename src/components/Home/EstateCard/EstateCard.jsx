import { Link } from "react-router-dom";


const EstateCard = ({ estateData }) => {
    const { image,id,estate_title} = estateData
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{estate_title}</h2>
                <Link to={`details/${id}`} className="btn btn-primary">View Property</Link>
            </div>
        </div>
    );
};

export default EstateCard;