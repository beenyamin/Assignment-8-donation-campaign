
const Banner = () => {

    const handleSearch = () => {

        console.log('src click')

    }

    return (

        <div className=''>
 
    <div className=" w-full h-96 rounded   mx-auto bg-[url('https://i.ibb.co/nw4xTtk/Rectangle-4281.png')] bg-cover bg-center">

        <div className="w-full h-full justify-center  items-center backdrop-opacity-60  bg-white/90">

            <div className="text-center py-32 ">

                <h2 className='font-bold text-3xl'>I Grow By Helping People In Need</h2>

                <div className="join my-4">
                    <input className="input bg-[#FFF] shadow-2xl join-item" placeholder="Search here...." />
                    <button onClick={handleSearch} className="btn text-[#FFF] px-6 bg-[#FF444A] join-item rounded-r-lg">Search</button>
                </div>
                        </div>
                    </div>
                </div>




        </div>
    );
};

export default Banner;



