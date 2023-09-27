
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className=''>
            <Navbar></Navbar>
            <div className='py-10'>
                <Outlet></Outlet>
                
            </div>
           
        </div>
    );
};

export default MainLayout;