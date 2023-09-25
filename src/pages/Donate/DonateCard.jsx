import React from 'react';

const DonateCard = ({card}) => {

    const { id, Picture, Title, Category, Category_bg, Card_bg, Text_button_bg, Description, Price } = card || {}

    return (
        <div>
            
 <div className="gap-5">

 <div className="card card-side bg-base-100  h-64 my-5 shadow-xl  gap-5">
  <figure><img className='w-72 h-64 justify-start' src={Picture} alt=""/></figure>

  <div className="card-body">

  <p className='bg-pink-300'>{Category}</p>
    <h2 className="card-title">{Title}</h2>

      <button className="bg-pink-400"> View Detailes</button>

  </div>
</div>


</div>

            
            
        </div>
    );
};

export default DonateCard;