import React from 'react';
import Swal from 'sweetalert2';

const AddCoffee = () => {

    const handleAddCoffee = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        console.log(formData)
        const newCoffee = Object.fromEntries(formData.entries());
        console.log(newCoffee);

        // send coffee data server 
        fetch('http://localhost:4000/coffees', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    console.log('success!')
                    Swal.fire({
                        title: "Coffee added successfully!",
                        icon: "success",
                        draggable: true
                    });
                    e.target.reset()

                }
            })
    }

    return (
        <div className='p-24'>

            <div className='p-12  text-center'>
                <h1 className='text-5xl space-y-4'>Add  Coffee</h1>
                <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            </div>
            <form onSubmit={handleAddCoffee} >
                <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Name</label>
                        <input type="text" name='name' className="input" placeholder="Coffee name" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Quantity</label>
                        <input type="text" name='quantity' className="input" placeholder="Enter coffee quantity" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Supplier</label>
                        <input type="text" name='supplier' className="input" placeholder="Enter coffee supplier" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Taste</label>
                        <input type="text" name='taste' className="input" placeholder="Enter coffee taste" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Price</label>
                        <input type="text" name='price' className="input" placeholder="Enter coffee price par cup" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Details</label>
                        <input type="text" name='details' className="input" placeholder="Enter coffee details" />
                    </fieldset>
                </div>
                <fieldset className="fieldset bg-base-200 my-4 border-base-300 rounded-box border p-4">
                    <label className="label">Photo </label>
                    <input type="text" name='photo' className="input w-full" placeholder="Photo URL" />
                </fieldset>
                <input type="submit" className='btn w-full' value="Add Coffee " />
            </form>
        </div>
    );
};

export default AddCoffee;