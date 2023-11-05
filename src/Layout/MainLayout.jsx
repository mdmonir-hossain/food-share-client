
import Navber from '../Components/Header/Navber/Navber';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;