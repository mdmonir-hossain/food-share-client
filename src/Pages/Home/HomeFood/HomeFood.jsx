import { Button, Card } from 'flowbite-react'
import { Link } from 'react-router-dom';



function HomeFood({ fooditem }) {
  console.log(fooditem)
  const { _id,additionalNotes,

    donatorEmail,

    donatorImage,

    donatorName,

    expiredDate,

    foodImage,

    foodName,

    foodQuantity,

    foodStatus,

    pickupLocation } = fooditem;
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
          <Button>
            <Link to={`/food/${_id}`}>View Details</Link>

          </Button>
          

        </div>
      </Card>


    </div>
  )
}

export default HomeFood
