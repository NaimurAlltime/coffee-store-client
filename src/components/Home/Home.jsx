// import React from "react";

import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import CoffeeCard from "../CoffeeCard/CoffeeCard";

const Home = () => {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);
  return (
    <div className="md:mx-24">
      <h3 className="text-3xl text-red-950 text-center font-bold">
        Hot Cold Coffee: {coffees.length}
      </h3>
      <div className="grid md:grid-cols-2 gap-8 mt-8">
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          ></CoffeeCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
