import React from 'react';
import HomeCard from './HomeCard';

const AllCard = ({card}) => {
    return (
        <div  >

            <div className= 'my-10 w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4' >
                {
                  card?.map (card => <HomeCard key ={card.id} card={card}></HomeCard>) 
                }
            </div>
            
        </div>
    );
};

export default AllCard;