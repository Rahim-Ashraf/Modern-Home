

const OrderCard = ({ ordereData }) => {
    const { image, estate_title } = ordereData
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{estate_title}</h2>
            </div>
        </div>
    );
};

export default OrderCard;