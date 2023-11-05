
import Banner from '../Components/Header/Banner/Banner';
import Navber from '../Components/Header/Navber/Navber';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    
    return (
        <div>
            <Navber></Navber>
            <Banner></Banner>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;