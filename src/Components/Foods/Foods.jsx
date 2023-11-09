import { useQuery } from "@tanstack/react-query"
import { Spinner } from "flowbite-react";
import HomeFood from "../../Pages/Home/HomeFood/HomeFood";


function Foods() {

const {isPending,data}=useQuery({

    queryKey:['food'],
    queryFn:async ()=>{
        const res= await fetch('http://localhost:5000/food');
        return res.json();
    }
})

if(isPending){
    return <Spinner aria-label="Default status example" />;
}
console.log(data);
    return (
        <div><h1 className="text-center text-3xl font-extrabold">Featured Foods</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 shadow-lg gap-4 container mx-auto mt-10">
        
            {
                data.map(fooditem => <HomeFood fooditem={fooditem}> </HomeFood>  )
            }
        </div>
        </div>
    )
}

export default Foods
