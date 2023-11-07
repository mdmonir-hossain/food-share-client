import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import AvailableFoods from "../Pages/AvailableFoods/AvailableFoods";
import AddFood from "../Pages/AddFood/AddFood";
import ManageMyFoods from "../Pages/ManageMyFoods/ManageMyFoods";
import MyFoodRequest from "../Pages/MyFoodRequest/MyFoodRequest";


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
        element: <AddFood></AddFood>,
      },
      {
        path: "/ManageMyFoods",
        element: <ManageMyFoods></ManageMyFoods>,
      },
      {
        path: "/MyFoodRequest",
        element: <MyFoodRequest></MyFoodRequest>,
      },
    ],
  },
]);

export default MainRoutes;