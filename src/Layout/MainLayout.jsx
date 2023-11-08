
import FooterSection from '../Components/Footer/Footer';

import Banner from '../Components/Header/Banner/Banner';
import Navber from '../Components/Header/Navber/Navber';
import { Outlet } from 'react-router-dom';
import SuccessStories from '../Components/SuccessStories/SuccessStories';
import ContactUs from '../Components/ContactUs/ContactUs';

const MainLayout = () => {
    
    return (
        <div>
            <Navber></Navber>
            
            <Outlet></Outlet>
            <SuccessStories></SuccessStories>
            <ContactUs></ContactUs>
           <FooterSection></FooterSection>
        </div>
    );
};

export default MainLayout;