import React from 'react'
import { Button, Card } from 'flowbite-react'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
function ManageAllFood({fooditemall}) {
    const {_id,additionalNotes,

        donatorEmail,
        
        donatorImage,
        
        donatorName,
        
        expiredDate,
        
        foodImage,
        
        foodName,
        
        foodQuantity,
        
        foodStatus,
        
        pickupLocation}=fooditemall;


        const handleDelete = (_id) => {
            console.log(_id);
            Swal.fire({
              title: "Are you sure?",
              text: "You won't be able to revert this!",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Yes, delete it!",
            }).then((result) => {
              fetch(
                `https://b8a11-server-side-xi.vercel.app/Delete/${_id}`,
                {
                  method: "DELETE",
                }
              )
                .then((res) => res.json())
                .then((data) => {
                  console.log(data);
                  if (data.deletedCount > 0 && foodStatus == "Available") {
                    Swal.fire({
                      title: "Success!",
                      text: "Product Deleted Successfully",
                      icon: "success",
                      confirmButtonText: "Cool",
                    });
                  }
                });
        
              if (result.isConfirmed) {
                Swal.fire("Deleted!", "Your file has been deleted.", "success");
              }
            });
          };

    return (
        <div>
                <Card
      className="max-w-sm"
      imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
      imgSrc={foodImage}
    >
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
  {foodName}
        </h5>
      </a>
      
      <div className="flex items-center justify-between">
        <span className=" font-bold text-gray-900 dark:text-white">  <img className='w-10' src={donatorImage} /></span>
        <span className="font-bold text-gray-900 dark:text-white"> Donar: {donatorName}</span>
        
      </div>
      <div className="flex items-center justify-between">
        <span className=" font-bold text-gray-900 dark:text-white">  {pickupLocation} </span>
        <span className="font-bold text-gray-900 dark:text-white"> Expired:{expiredDate}</span>
        
      </div>
      <div className="flex items-center justify-between">
        <span className=" font-bold text-gray-900 dark:text-white">  {additionalNotes} </span>
        
        
      </div>
      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">Quantity: {foodQuantity}</span>
        
        
        
      </div>
      <div className="flex items-center justify-between">

      <Button><Link to={`/Updatefood/${_id}`}>Update</Link></Button>
      <Button onClick={() => handleDelete(_id)} >Delete</Button>
         </div>
    </Card>
        </div>
    )
}

export default ManageAllFood;
