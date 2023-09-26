import { useEffect, useState } from 'react';
import DonateCard from './DonateCard';

const Donate = () => {

  const [donateItem, setDonateItem] = useState([])

  const [noDataFound, setNoDAtaFound] = useState("")

  const [seeAll, setSeeAll] = useState (false)

  useEffect(() => {

    const donationPage = JSON.parse(localStorage.getItem('donation'));

    if (donationPage) {

      setDonateItem(donationPage)

    } else {
      setNoDAtaFound('No Donation Here')

    }


  }, [])

  console.log(donateItem)

  console.log(seeAll)

  return (
    <div>



      {

        noDataFound ? <p className=' h-64 font-bold text-2xl flex justify-center items-center'>{noDataFound}</p> :
          <div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-auto w-10/12'>

              { seeAll? 
              
              donateItem.map(card => <DonateCard key={card.id} card={card}></DonateCard>) :
              
              donateItem.slice(0,4).map(card => <DonateCard key={card.id} card={card}></DonateCard>) }


            </div>
          

         <div className='text-center'>


         { donateItem.length > 4 &&  <button onClick={() => setSeeAll(!seeAll)}   className='px-5 py-1 text-[#FFF]  rounded mx-auto text-lg font-semibold bg-[#009444]'> {seeAll? "See Less" : "See all"}</button>}

         </div>


          </div>

      }

    </div>
  );
};

export default Donate;