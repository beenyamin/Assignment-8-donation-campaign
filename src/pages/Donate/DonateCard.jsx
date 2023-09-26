import React from 'react';

const DonateCard = ({card}) => {

    const { id, Picture, Title, Category,  color_btn_bg, color_card_bg, color_text_button, Description, Price } = card || {}

    return (
        <div>
            
 <div className="gap-5">

 <div className="card card-side h-56 my-5  mx-5" style={{ backgroundColor: color_card_bg }}>
  <figure><img className='w-64 h-72 justify-start' src={Picture} alt=""/></figure>

  <div className="card-body ">

    <button className=" py-1 rounded font-semibold text-lg" style={{ backgroundColor: color_btn_bg , color: color_text_button }}>{Category}</button>

    <h2 className="card-title font-bold text-xl  ">{Title}</h2>

    <p className='text-lg font-medium' style={{ color: color_text_button }} >{Price}</p>

    <button className="px-3 py-2 rounded font-semibold  text-sm text-[#FFF]" style={{ backgroundColor: color_text_button }}> View Details</button>

  </div>
</div>


</div>

            
            
        </div>
    );
};

export default DonateCard;