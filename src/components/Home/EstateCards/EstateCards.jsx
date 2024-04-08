import { useEffect, useState } from "react";
import EstateCard from "../EstateCard/EstateCard";


const EstateCards = () => {
    const [estatesData, setEstatesData] = useState([])
    useEffect(() => {
        fetch("https://raw.githubusercontent.com/Rahim-Ashraf/estateData/main/estateData.json")
            .then(res => res.json())
            .then(data => setEstatesData(data))
    }, [])
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {estatesData?.map(estateData => {
                return <EstateCard key={estateData.id} estateData={estateData}></EstateCard>
            })}
        </div>
    );
};

export default EstateCards;