
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    return (

        <div className='flex justify-between w-11/12  mx-auto my-5 '>

            <div >
                <img className='w-36' src="/src/assets/Logo.png" alt="" />
            </div>

            <nav>
                <ul className="flex gap-5">
            <li>
            <NavLink to="/"className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? 
            "text-[#FF444A] underline" : ""} > Home </NavLink>

            </li>

            <li>

            <NavLink to="/donation" className={({ isActive, isPending })=> isPending ? "pending" : isActive ? "text-[#FF444A] underline" : "" }>
             Donation </NavLink>

           </li>

            <li>

            <NavLink to="/statistics" className={({ isActive, isPending })=> isPending ? "pending" : isActive ? "text-[#FF444A] underline" : "" }>
            Statistics </NavLink>
             
           </li>

                </ul>

            </nav>

        </div>



    );
};

export default Navbar;