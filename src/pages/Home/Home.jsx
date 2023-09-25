
import { useLoaderData } from 'react-router-dom';
import Banner from '../../Components/Banner/Banner';
import AllCard from '../../Components/AllCard/AllCard';
const Home = () => {

    const card =useLoaderData ()
    return (

        <div>

            <Banner></Banner>
            <AllCard card ={card}></AllCard>


        </div>
    );
};

export default Home;