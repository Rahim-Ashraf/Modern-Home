import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";


const CardDetails = () => {
    const { id } = useParams();
    const [estateData, setEstateData] = useState({})
    useEffect(() => {
        fetch("https://raw.githubusercontent.com/Rahim-Ashraf/estateData/main/estateData.json")
            .then(res => res.json())
            .then(data => setEstateData(data[id - 1]))
    }, [])
    console.log(estateData)
    return (
        <div className="card card-side shadow-xl">
            <Helmet>
                <title>Modern House | Card details</title>
            </Helmet>
            <div className="w-full md:w-1/2">
                <img className="w-full" src={estateData?.image} alt="Movie" />
            </div>
            <div className="card-body">
                <h2 className="card-title">{estateData?.estate_title}</h2>
                <p>{estateData?.description}</p>
                <div className="flex justify-between">
                    <p>Location: {estateData?.location}</p>
                    <p>Area: {estateData?.area}</p>
                </div>
                <div className="flex justify-between">
                    <ul>
                        <li className="font-bold">facilities:</li>
                        <li className="ml-6 list-disc">{estateData?.facilities}</li>
                        <li className="ml-6 list-disc">{estateData?.facilities}</li>
                        <li className="ml-6 list-disc">{estateData?.facilities}</li>
                    </ul>
                    <p>Segment name: {estateData?.segment_name}</p>
                </div>
                <div className="flex justify-between">
                    <p>For: {estateData?.status}</p>
                    <p>Price: {estateData?.price}</p>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;