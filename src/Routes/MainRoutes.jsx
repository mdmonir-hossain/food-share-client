import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import AvailableFoods from "../Pages/AvailableFoods/AvailableFoods";
import AddFood from "../Pages/AddFood/AddFood";
import ManageMyFoods from "../Pages/ManageMyFoods/ManageMyFoods";
import MyFoodRequest from "../Pages/MyFoodRequest/MyFoodRequest";
import Login from "../Pages/LogIn/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoutes from "./PrivateRoutes";
import FoodDetails from "../Pages/FoodDetails/FoodDetails";
import UpdateFood from "../Pages/UpadateFood/UpadateFood";


const MainRoutes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/AvailableFoods",
        element: <AvailableFoods></AvailableFoods>,
      },
      {
        path: "/AddFood",
        element: (
          <PrivateRoutes>
            <AddFood></AddFood>
          </PrivateRoutes>
        ),
      },
      {
        path: "/ManageMyFoods",
        element: (
          <PrivateRoutes>
            <ManageMyFoods></ManageMyFoods>
          </PrivateRoutes>
        ),
      },
      {
        path: "/MyFoodRequest",
        element: <PrivateRoutes>
            <MyFoodRequest></MyFoodRequest>
          </PrivateRoutes>,
          loader: () =>
          fetch(
            `https://b8a11-server-side-xi.vercel.app/requestfood/`
          ),
        
      },
      {
        path: "/Login",
        element: <Login></Login>,
      },
      {
        path: "/SignUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/food/:_id",
        element: <PrivateRoutes>
        <FoodDetails></FoodDetails>
      </PrivateRoutes> ,
      loader: () =>
      fetch(
        `https://b8a11-server-side-xi.vercel.app/foodall/`
      ),
      },
      {
        path: "/Updatefood/:_id",
        element: <PrivateRoutes>
        <UpdateFood></UpdateFood>
      </PrivateRoutes> ,
      loader: () =>
      fetch(
        `https://b8a11-server-side-xi.vercel.app/foodall/`
      ),
      },
    ],
  },
]);

export default MainRoutes;