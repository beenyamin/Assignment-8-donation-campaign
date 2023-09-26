import React from 'react';

const Banner = () => {
    return (
        <div className=''>


            <div className=" w-10/12 my-10 mx-auto text-center " >

                <h2 className='font-bold text-3xl'>I Grow By Helping People In Need</h2>
                <div className="join my-5">
                    <input className="input px-14 bg-[#DEDEDE] join-item" placeholder="Search here...." />
                    <button className="btn text-[#FFF] px-6 bg-[#FF444A] join-item rounded">Search</button>
                </div>
            </div>

        </div>
    );
};

export default Banner;