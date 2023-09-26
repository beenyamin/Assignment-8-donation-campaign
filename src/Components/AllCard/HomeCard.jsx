/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const HomeCard = ({ card }) => {

        const { id, Picture, Title, Category, color_btn_bg, color_card_bg, color_text_button, Description, Price } = card || {}
        return (


        <div className=' w-11/12 mx-auto '>


            <Link to={`/oneCard/${id}`}>

                <div className=" w-56 h-64 my-5 rounded-xl " style={{ backgroundColor: color_card_bg }}>

                <figure> <img className='w-64 rounded-t-lg ' src={Picture} alt={Title} /></figure>

                
                 <div className="mx-4 my-8 "  >
 
                 <button className="px-2 rounded" style={{ backgroundColor: color_btn_bg , color: color_text_button }}>{Category}</button>  
                 <h2 className=" font-bold text-xl card-title"  style={{ color: color_text_button }}>{Title} </h2>

                    </div>
                </div>

            </Link>
            

        </div>
    );
};

export default HomeCard;