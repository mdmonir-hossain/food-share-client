
import FooterSection from '../Components/Footer/Footer';

import Banner from '../Components/Header/Banner/Banner';
import Navber from '../Components/Header/Navber/Navber';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    
    return (
        <div>
            <Navber></Navber>
            
            <Outlet></Outlet>
           <FooterSection></FooterSection>
        </div>
    );
};

export default MainLayout;