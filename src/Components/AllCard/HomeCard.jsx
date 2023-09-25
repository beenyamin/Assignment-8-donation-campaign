/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const HomeCard = ({ card }) => {

    const { id, Picture, Title, Category, Category_bg, Card_bg, Text_button_bg, Description, Price } = card || {}
    return (


        <div className='  w-11/12 mx-auto'>


            <Link to={`/oneCard/${id}`}>

                <div className=" w-56 h-64 my-5 ">

                <figure> <img className='w-64' src={Picture} alt="card!" /></figure>
                 <div className="card-body bg-red-400 ">
                 <p className='bg-white '>{Category}</p>
                 <h2 className="  card-title">{Title} </h2>

                    </div>
                </div>

            </Link>
            

        </div>
    );
};

export default HomeCard;