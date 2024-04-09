import { useContext } from "react";
import { HouseContext } from "../../Provider/Provider";
import { useLoaderData } from "react-router-dom";
import OrderCard from "./OrderCard/OrderCard";


const Dashboard = () => {
    const data = useLoaderData()
    const { user } = useContext(HouseContext);
    return (
        <div>
            <h2 className="text-4xl font-bold my-4">Hello, {user?.displayName}!</h2>
            <h2 className="text-4xl font-bold my-10 text-center">Your Orders</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {data?.filter(singleData => singleData.id < 5 && singleData.id > 2).map(singleData => <OrderCard key={singleData.id} ordereData={singleData}></OrderCard>)}
            </div>
        </div>
    );
};

export default Dashboard;