import React from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
    // console.log(coffee)
    const { _id, photo, price, quantity, name } = coffee

    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {

            if (result.isConfirmed) {              
                fetch(`http://localhost:4000/coffees/${_id}`, {
                    method: 'DELETE'
                }).then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Coffee has been deleted.",
                                icon: "success"
                            });
                        }
                        const remainingCoffees = coffees.filter(cof => cof._id !== _id)
                        setCoffees(remainingCoffees)
                    })
            }
        });
        console.log(_id)
    }

    return (
        <div>
            <div className="card card-side bg-base-100 shadow-sm">
                <figure>
                    <img
                        src={photo}
                        alt="Movie" />
                </figure>
                <div className="flex mt-6 justify-around w-full">
                    <div>
                        <h2 className=""> Name : {name}</h2>
                        <p>Price: {price}</p>
                        <p>Quantity: {quantity}</p>
                    </div>
                    <div className="card-actions  justify-end">
                        <div className="join join-vertical space-y-3">
                            <Link to={`/coffee/${_id}`}>
                                <button className="btn join-item">View</button>
                            </Link>
                            <Link to={`/updatedCoffee/${_id}`}>
                                <button className="btn join-item">Edit</button></Link>
                            <button
                                onClick={() => handleDelete(_id)}
                                className="btn join-item">x</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;