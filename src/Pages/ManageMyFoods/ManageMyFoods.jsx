
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";

import { Spinner } from "flowbite-react";
import ManageAllFood from "../ManageAllFood/ManageAllFood";

const ManageMyFoods = () => {


  

  const { isPending, data } = useQuery({

    queryKey: ['food'],
    queryFn: async () => {
        const res = await fetch('https://b8a11-server-side-xi.vercel.app/foodall');
        return res.json();
    }
})

if (isPending) {
    return <Spinner aria-label="Default status example" />;
}
    return (
      <div className="min-h-screen">
        <Helmet>
          <title>Manage My Foods</title>
        </Helmet>
        <h1 className="text-center text-3xl font-extrabold"> Manage My Foods</h1>
       
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 shadow-lg gap-4 container mx-auto mt-10">

                {
                    data.map(fooditemall => <ManageAllFood fooditemall={fooditemall}> </ManageAllFood>)
                }
            </div>
      </div>
    );
};

export default ManageMyFoods;