import Lottie from "lottie-react";
import { Helmet } from "react-helmet";
import add from "../../assets/add.json"
import { Button, Label, TextInput, Select, Datepicker } from "flowbite-react";
import { motion } from "framer-motion";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLoaderData } from "react-router-dom";

function UpdateFood() {
    const update = useLoaderData();

    const {_id,additionalNotes,

        donatorEmail,
        
        donatorImage,
        
        donatorName,
        
        expiredDate,
        
        foodImage,
        
        foodName,
        
        foodQuantity,
        
        foodStatus,
        
        pickupLocation
        }=update;

    console.log(update);

    const handleupdateFood = (event) => {
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
    
        
      
        fetch(
            `https://b8a11-server-side-xi.vercel.app/foodall/${_id}`,
            {
              method: "PUT",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(UpadteProductData),
            }
          )
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.modifiedCount) {
                Swal.fire({
                  title: "Success!",
                  text: "Product Updated Successfully",
                  icon: "success",
                  confirmButtonText: "Cool",
                });
              }
            });
      };
    return (
        <div>
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
        <h1 className="text-3xl text-center">Update Food</h1>
        <form
          onSubmit={handleupdateFood}
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
                placeholder="Food Name" defaultValue={foodName}
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
                placeholder="food Image" defaultValue={foodImage}
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
                type="number"
                placeholder="food Quantity" defaultValue={foodQuantity}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="pickupLocation" value="pickup Location" />
              </div>
              <Select id="pickupLocation" name="pickupLocation" defaultValue={pickupLocation} required>
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
                placeholder="Expired Date" defaultValue={expiredDate}
                required
              />
              {/* <Datepicker name="expiredDate" /> */}
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="additionalNotes" value="Additional Notes" defaultValue={additionalNotes} />
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
              <Select id="foodStatus" name="foodStatus" defaultValue={foodStatus} required>
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
        </div>
    )
}

export default UpdateFood
