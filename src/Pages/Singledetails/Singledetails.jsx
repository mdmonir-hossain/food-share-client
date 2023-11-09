import { Button, Card,Checkbox, Datepicker, Label, Modal, TextInput } from 'flowbite-react';
import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';


function Singledetails({detailsid}) {
    const {user}=useContext(AuthContext);
    const [openModal, setOpenModal] = useState(false);
  const emailInputRef = useRef(null);
     const {_id,additionalNotes,

        donatorEmail,
        
        donatorImage,
        
        donatorName,
        
        expiredDate,
        
        foodImage,
        
        foodName,
        
        foodQuantity,
        
        foodStatus,
        
        pickupLocation}=detailsid;

        const handleAddrequestFood = (event) => {
            event.preventDefault();
            const form = event.target;
            const donationMoney = form.donationMoney.value;
            const requsetDate  = form.todayDate.value;
            const notes = form.notes.value;
        
            const foodrequestData = {
              foodName,
              foodImage,
              foodQuantity,
              pickupLocation,
              expiredDate,
              foodStatus,
              notes,
              donatorName,
              donationMoney,
              requsetDate,
              userEmail: user?.email || "",
            };
        console.log(foodrequestData)
            
            axios.post('https://b8a11-server-side-xi.vercel.app/requestfood',foodrequestData)
            .then(data=>{
              if (data.data.insertedId) {
                      Swal.fire({
                        title: "Success!",
                        text: "Food requset Added Successfully",
                        icon: "success",
                        confirmButtonText: "Cool",
                      }) }
            })
            
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
        <Link to={`/food/${_id}`}><Button onClick={() => setOpenModal(true)}>Request</Button></Link>
        
      <Modal show={openModal} size="md" popup onClose={() => setOpenModal(false)} initialFocus={emailInputRef}>
        <Modal.Header />
        <Modal.Body>
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
        
        <span className=" font-bold text-gray-900 dark:text-white"> User: {user?.email} </span>
      </div>
      <form onSubmit={handleAddrequestFood}>
      <div className="flex items-center justify-between">
      Request Date
        <Datepicker name='todayDate' disabled/>
      </div>
      <div className="flex items-center justify-between">
        <input type='text' name='notes' placeholder='Additional Notes' /> 
        
        
      </div>
      
      <div className="flex items-center justify-between">
        <input type='text' name='donationMoney' placeholder='Donation Money' /> 
       
        
      </div>
      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">Quantity: {foodQuantity}</span>
        <Button type='submit'>Request</Button>

        
      
      </div>
      </form>
    </Card>
        </Modal.Body>
      </Modal>
      </div>
    </Card>

        </div>
    )
}

export default Singledetails
