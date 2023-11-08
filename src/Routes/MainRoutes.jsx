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
        element: (
          <PrivateRoutes>
            <MyFoodRequest></MyFoodRequest>
          </PrivateRoutes>
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
    ],
  },
]);

export default MainRoutes;