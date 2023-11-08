import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { NavLink } from "react-router-dom";

const Navber = () => {
  
  return (
    <div className="shadow-lg">
      <Navbar fluid rounded>
        <Navbar.Brand href="">
          <img
            src="https://i.ibb.co/nPwJkyQ/food-share.png"
            className="mr-3 h-6 sm:h-9"
            alt=""
          />
          <span className=" text-sky-500 self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            FOOD SHARE
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline
            label={<Avatar alt="User settings" img="" rounded />}
          >
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/AvailableFoods">Available Foods</NavLink>
          <NavLink to="/AddFood">Add Food</NavLink>
          <NavLink to="/ManageMyFoods">Manage My Foods</NavLink>
          <NavLink to="/MyFoodRequest">My Food Request</NavLink>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navber;
