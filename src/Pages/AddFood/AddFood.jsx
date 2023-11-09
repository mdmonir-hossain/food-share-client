import Lottie from "lottie-react";
import { Helmet } from "react-helmet";
import add from "../../assets/add.json"
import { Button, Label, TextInput, Select, Datepicker } from "flowbite-react";
import { motion } from "framer-motion";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

import Swal from "sweetalert2";
import axios from "axios";

const AddFood = () => {
  const { user } = useContext(AuthContext);

  const handleAddFood = (event) => {
    event.preventDefault();
    const form = event.target;
    const foodName = form.foodName.value;
    const foodImage = form.foodImage.value;
    const foodQuantity = form.foodQuantity.value;
    const pickupLocation = form.pickupLocation.value;
    const expiredDate = form.expiredDate.value;
    const additionalNotes = form.additionalNotes.value;
    const foodStatus = form.foodStatus.value;

    const foodData = {
      foodName,
      foodImage,
      foodQuantity,
      pickupLocation,
      expiredDate,
      additionalNotes,
      foodStatus,
      donatorEmail: user?.email || "",
      donatorName:user?.displayName || "",
      donatorImage: user?.photoURL || ""

    };

    console.log(foodData);
    axios.post('http://localhost:5000/food',foodData)
    .then(data=>{
      if (data.data.insertedId) {
              Swal.fire({
                title: "Success!",
                text: "Food Added Successfully",
                icon: "success",
                confirmButtonText: "Cool",
              }) }

      
    })
    // fetch(
    //   "http://localhost:5000/food",
    //   {
    //     method: "POST",
    //     headers: {
    //       "content-type": "application/json",
    //     },
    //     body: JSON.stringify(foodData),
    //   }
    // )
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     if (data.insertedId) {
    //       Swal.fire({
    //         title: "Success!",
    //         text: "Food Added Successfully",
    //         icon: "success",
    //         confirmButtonText: "Cool",
    //       });
    //     }
    //   });
  };
  console.log(user);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 justify-center items-center">
      <Helmet>
        <title> Add Food</title>
      </Helmet>

      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 1, type: "spring", stiffness: 60 }}
        className="flex-1 lg:ml-3 lg:px-10 lg:py-20 justify-center items-center  rounded-lg "
      >
        <h1 className="text-3xl text-center">Add Food</h1>
        <form
          onSubmit={handleAddFood}
          className="flex max-w-md flex-col gap-4"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-2">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="foodName" value="Food Name" />
              </div>
              <TextInput
                name="foodName"
                id="name"
                type="text"
                placeholder="Food Name"
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="foodImage" value="food Image" />
              </div>
              <TextInput
                name="foodImage"
                id="foodImage"
                type="text"
                placeholder="food Image"
                required
              />
            </div>
            
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-2">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="foodQuantity" value="food Quantity" />
              </div>
              <TextInput
                name="foodQuantity"
                id="foodQuantity"
                type="text"
                placeholder="food Quantity"
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="pickupLocation" value="pickup Location" />
              </div>
              <Select id="pickupLocation" name="pickupLocation" required>
                <option>Dhaka</option>
                <option>Chittagong</option>
                <option>Rajshahi</option>
                <option>Sylhet</option>
                <option>Mymensingh</option>
                <option>Barisal</option>
              </Select>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-2">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="expiredDate" value="Expired Date" />
              </div>
              <TextInput
                name="expiredDate"
                id="expiredDate"
                type="date"
                placeholder="Expired Date"
                required
              />
              {/* <Datepicker name="expiredDate" /> */}
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="additionalNotes" value="Additional Notes" />
              </div>
              <TextInput
                id="additionalNotes"
                type="text"
                placeholder="Additional Notes"
                name="additionalNotes"
                required
              />
            </div>
          </div>
          <div>
            <div className="w-full">
              <div className="mb-2 block">
                <Label htmlFor="foodStatus" value="Food Status" />
              </div>
              <Select id="foodStatus" name="foodStatus" required>
                <option value="Available">Available</option>
                <option value="Delivered">Delivered</option>
              </Select>
            </div>
          </div>

          <Button type="submit">Add Item</Button>
        </form>
      </motion.div>
      <motion.div
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 2, type: "tween" }}
        className="flex-1"
      >
        <Lottie animationData={add}></Lottie>
      </motion.div>
    </div>
  );
};

export default AddFood;