import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom';
import Singledetails from '../Singledetails/Singledetails';

function FoodDetails() {
    const selectedFood = useLoaderData();
    const [detailsid, setDetails] = useState([]);
    const { _id } = useParams();
    const detailsData = useLoaderData([]);
    useEffect(() => {
        const singlecard = selectedFood?.find(
            (singleDetails) => singleDetails._id === _id
        );
        setDetails(singlecard);
    }, [_id, detailsData]);
    console.log(detailsid);

    return (
        <div>

   <Singledetails detailsid={detailsid}></Singledetails>

        </div>
    )
}

export default FoodDetails
