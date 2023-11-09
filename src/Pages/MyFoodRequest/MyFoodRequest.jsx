import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import RequestCard from "../RequestCard/RequestCard";


const MyFoodRequest = () => {
  const [requsetfood, setrequsetfood] = useState([]);

  const { user } = useContext(AuthContext);
  console.log(user)

  const myRequestData = useLoaderData([]);

  useEffect(() => {
    const requsetData = myRequestData.filter((requset) => requset.userEmail
    === user.email);
    setrequsetfood(requsetData);
  }, [user.email]);
  
console.log(requsetfood);

    return (
      <div className="min-h-screen">
        <Helmet>
          <title>My Food Request</title>
        </Helmet>
        {
          requsetfood.map(requestall=> <RequestCard requestall={requestall}></RequestCard>)
        }
      </div>
    );
};

export default MyFoodRequest;