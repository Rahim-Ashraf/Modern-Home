import { useEffect, useState } from "react";
import EstateCard from "../EstateCard/EstateCard";


const EstateCards = () => {
    const [estatesData, setEstatesData] = useState()
    useEffect(() => {
        fetch("estateData.json")
            .then(res => res.json())
            .then(data => setEstatesData(data))
    }, [])
    return (
        <div>
            {estatesData?.map(estateData => {
                <EstateCard estateData={estateData}></EstateCard>
            })}
        </div>
    );
};

export default EstateCards;