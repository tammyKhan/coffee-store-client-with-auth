import { useLoaderData } from "react-router-dom"
import CoffeeCard from "./components/CoffeeCard";
import { useState } from "react";


function App() {
    const loadedCoffees = useLoaderData();
    const [coffees, setCoffees] = useState(loadedCoffees)

  return (
    <div className="m-20">
      
      <h1 className="text-4xl font-bold my-12 text-center text-orange-950">Hot & COld Coffee : {coffees.length} </h1>
       <div className="grid md:grid-cols-2 gap-4">
       {
          coffees.map(coffee => <CoffeeCard
           key={coffee._id}
           coffee={coffee}
           coffees={coffees}
           setCoffees={setCoffees}
          ></CoffeeCard>)
        }
       </div>
    </div>
  )
}

export default App
