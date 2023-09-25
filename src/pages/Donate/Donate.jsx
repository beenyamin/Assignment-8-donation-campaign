import  { useEffect, useState } from 'react';
import MultipleCard from '../Card/MultipleCard';
import HomeCard from '../../Components/AllCard/HomeCard';
import DonateCard from './DonateCard';

const Donate = () => {

    const [donateItem, setDonateItem] = useState ([])

    const [noDataFound, setNoDAtaFound] = useState ("")

    useEffect( () => {

       const donationPage = JSON.parse(localStorage.getItem('donation'));

     if (donationPage) {

        setDonateItem(donationPage)
        
     } else
     {
        setNoDAtaFound ('No Donation Here')

     }


    }, [])
   
console.log(donateItem)

    return (
        <div>
          
          { 

         noDataFound ? <p className=' h-64 font-bold text-2xl flex justify-center items-center'>{ noDataFound}</p> :
         <div> 

   <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-auto w-7/12'>

    { donateItem.map ( card => <DonateCard key={card.id}  card={card}></DonateCard> ) }
   </div>

         </div>
          
          }
        </div>
    );
};

export default Donate;