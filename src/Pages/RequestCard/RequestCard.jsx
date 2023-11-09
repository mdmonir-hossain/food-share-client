import { Button, Card } from 'flowbite-react';
import React from 'react'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

function RequestCard({requestall}) {
    console.log(requestall)
    const {_id,donatorName,
        donationMoney,
        expiredDate,
        foodImage,
        foodName,
        foodQuantity,
        foodStatus,
        notes,
        pickupLocation,
        requsetDate,
        userEmail,
        }=requestall;

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
                `https://b8a11-server-side-xi.vercel.app/requestfood/${_id}`,
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
      
    >
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Donar:
  {donatorName}
        </h5>
      </a>
      
      <div className="flex items-center justify-between">

        <span className="font-bold text-gray-900 dark:text-white">  pickupLocation: {pickupLocation}</span>
        
      </div>
      <div className="flex items-center justify-between">
        <span className=" font-bold text-gray-900 dark:text-white">  Expired:{expiredDate} </span>
        <span className="font-bold text-gray-900 dark:text-white"> requset:{requsetDate}</span>
      </div>
      <div className="flex items-center justify-between">
        <span className=" font-bold text-gray-900 dark:text-white">  donation:{donationMoney} </span>
        
        
      </div>
      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold text-gray-900  dark:text-white">Status: {foodStatus}</span>
        <Button onClick={() => handleDelete(_id)} 
              className="btn bg-red-600 text-white"> {foodStatus == "Available" ? "Cancel" : <Button disabled>Not Allow to delete</Button>}</Button>
      
      </div>
    </Card>
        </div>
    )
}

export default RequestCard
