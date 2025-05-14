import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import CoffeeCard from './CoffeeCard';

const Home = () => {
    const initialCoffees = useLoaderData();
   const [coffees , setCoffees] = useState(initialCoffees)

    return (
        <div>

            <div className='grid grid-cols-1 w-8/12 mx-auto gap-4 md:grid-cols-2'>
                {
                    coffees.map(coffee =>
                        <CoffeeCard key={coffee._id} 
                        coffees={coffees}
                        setCoffees={setCoffees}
                        coffee={coffee}>
                        </CoffeeCard>)
                }
            </div>
        </div>
    );
};

export default Home;