import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const Navber = () => {
  const { user, signOutUser } = useContext(AuthContext);
 

  const handleSignOut = () => {
    signOutUser()
      .then(result => {
        console.log(result.user);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div className="shadow-lg border-b-sky-500 border-b-[5px] ">
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
          {user ? (
            <Dropdown
              arrowIcon={false}
              inline
              label={
                <Avatar alt="User settings" img={user?.photoURL} rounded />
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">{user?.displayName}</span>
                <span className="block truncate text-sm font-medium">
                  {user?.email}
                </span>
              </Dropdown.Header>
              <Dropdown.Item
                onClick={handleSignOut}
                className="bg-sky-500 text-white text-center hover:text-black p-2 rounded-lg"
              >
                Sign out
              </Dropdown.Item>
            </Dropdown>
          ) : (
            <div>
              <Link
                to="/Login"
                className="bg-sky-500 hover:text-black text-white p-2 rounded-lg"
              >
                Log in
              </Link>{" "}
              <Link
                to="/SignUP"
                className="bg-sky-500 hover:text-black text-white p-2 rounded-lg"
              >
                Sign Up
              </Link>
            </div>
          )}

          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "border-b-2 border-sky-500"
                : ""
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/AvailableFoods"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "border-b-2 border-sky-500"
                : ""
            }
          >
            Available Foods
          </NavLink>
          <NavLink
            to="/AddFood"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "border-b-2 border-sky-500"
                : ""
            }
          >
            Add Food
          </NavLink>
          <NavLink
            to="/ManageMyFoods"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "border-b-2 border-sky-500"
                : ""
            }
          >
            Manage My Foods
          </NavLink>
          <NavLink
            to="/MyFoodRequest"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "border-b-2 border-sky-500"
                : ""
            }
          >
            My Food Request
          </NavLink>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navber;
