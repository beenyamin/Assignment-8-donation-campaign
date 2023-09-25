
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import MultipleCard from "./MultipleCard";

const OneCard = () => {


    const [card, setCard] = useState({})
    const { id } = useParams()
    const oneCard = useLoaderData()
    useEffect(() => {
        const FindCard = oneCard?.find(card => card.id == id)
        setCard(FindCard)

    }, [id, oneCard])

    console.log(card)

    return (
        <div className=" mx-auto w-11/12 "> 
    <MultipleCard card ={card} ></MultipleCard>

        </div>
    );
};

export default OneCard;