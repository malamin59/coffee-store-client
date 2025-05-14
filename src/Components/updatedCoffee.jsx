import React from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const updatedCoffee = () => {
    const coffee = useLoaderData();

    const { name, photo, _id, price, supplier, taste, details, quantity } = coffee


    const handleUpdateCoffee = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const updatedCoffee = Object.fromEntries(formData.entries());
        console.log(updatedCoffee);

        fetch(`http://localhost:4000/coffees/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Coffee Updated successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    return (
        <div>
            <div>

                <div className='p-24'>

                    <div className='p-12  text-center'>
                        <h1 className='text-5xl space-y-4'>Update Coffee</h1>
                    </div>
                    <form onSubmit={handleUpdateCoffee} >
                        <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
                            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                                <label className="label">Name</label>
                                <input type="text" name='name' defaultValue={name} className="input" placeholder="Coffee name" />
                            </fieldset>
                            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                                <label className="label">Quantity</label>
                                <input type="text" name='quantity' defaultValue={quantity} className="input" placeholder="Enter coffee quantity" />
                            </fieldset>
                            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                                <label className="label">Supplier</label>
                                <input type="text" name='supplier' defaultValue={supplier} className="input" placeholder="Enter coffee supplier" />
                            </fieldset>
                            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                                <label className="label">Taste</label>
                                <input type="text" name='taste' defaultValue={taste} className="input" placeholder="Enter coffee taste" />
                            </fieldset>
                            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                                <label className="label">Price</label>
                                <input type="text" name='price' defaultValue={price} className="input" placeholder="Enter coffee price par cup" />
                            </fieldset>
                            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                                <label className="label">Details</label>
                                <input type="text" name='details' defaultValue={details} className="input" placeholder="Enter coffee details" />
                            </fieldset>
                        </div>
                        <fieldset className="fieldset bg-base-200 my-4 border-base-300 rounded-box border p-4">
                            <label className="label">Photo </label>
                            <input type="text" name='photo' defaultValue={photo} className="input w-full" placeholder="Photo URL" />
                        </fieldset>
                        <input type="submit" className='btn w-full' value="Update Coffee " />
                    </form>
                </div>

            </div>
        </div>
    );
};

export default updatedCoffee;