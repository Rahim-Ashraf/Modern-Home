import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";


const CardDetails = () => {
    const { id } = useParams();
    const [estateData, setEstateData] = useState(null)
    useEffect(() => {
        fetch("https://raw.githubusercontent.com/Rahim-Ashraf/estateData/main/estateData.json")
            .then(res => res.json())
            .then(data => setEstateData(data[id - 1]))
    }, [])
    return (
        <div className="card card-side shadow-xl">
            <Helmet>
                <title>Modern House | Card details</title>
            </Helmet>
            <div className="lg:flex p-4">
                <div className="w-full md:w-1/2">
                    <img className="rounded-lg" src={estateData?.image} alt="Movie" />
                </div>
                <div className="card-body">
                    <h2 className="text-4xl font-bold mb-4">{estateData?.estate_title}</h2>
                    <p>{estateData?.description}</p>
                    <div className="flex justify-between">
                        <div className="flex gap-2 items-center">
                            <CiLocationOn />
                            <p>{estateData?.location}</p>
                        </div>
                        <div><p><span className="font-bold">Area: </span>{estateData?.area}</p></div>
                    </div>
                    <div className="flex justify-between">
                        <ul>
                            <li className="font-bold">facilities:</li>
                            <li className="ml-6 list-disc">{estateData?.facilities[0]}</li>
                            <li className="ml-6 list-disc">{estateData?.facilities[1]}</li>
                            <li className="ml-6 list-disc">{estateData?.facilities[2]}</li>
                        </ul>
                        <div><p><span className="font-bold">Segment name: </span> {estateData?.segment_name}</p></div>
                    </div>
                    <div className="flex justify-between">
                        <div><p className="text-lg font-bold">Status: {estateData?.status}</p></div>
                        <div><p className="text-xl font-bold text-cyan-600">Price: {estateData?.price}</p></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;