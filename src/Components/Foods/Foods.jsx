import { useQuery } from "@tanstack/react-query"
import { Button, Spinner } from "flowbite-react";
import HomeFood from "../../Pages/Home/HomeFood/HomeFood";
import { Link } from "react-router-dom";


function Foods() {

    const { isPending, data } = useQuery({

        queryKey: ['food'],
        queryFn: async () => {
            const res = await fetch('https://b8a11-server-side-xi.vercel.app/food');
            return res.json();
        }
    })

    if (isPending) {
        return <Spinner aria-label="Default status example" />;
    }
    console.log(data);
    return (
        <div>
        <h1 className="text-center text-3xl font-extrabold">Featured Foods</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 shadow-lg gap-4 container mx-auto mt-10">

                {
                    data.map(fooditem => <HomeFood fooditem={fooditem}> </HomeFood>)
                }
            </div>
            <div className="flex  justify-center mt-10">
                <Button ><Link to="/AvailableFoods">Show All</Link></Button>
            </div>
        </div>
    )
}

export default Foods
