import React from "react";
import Swal from 'sweetalert2'

const AddCoffee = () => {
  const handleAddCoffee = e =>{
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffee =  {name, quantity, supplier, taste, category, details, photo}
    console.log(newCoffee)

    // send data to the server
    fetch('http://localhost:5000/coffee',{
      method: "POST",
      headers: {
        'content-type':'application/json'
      },
      body: JSON.stringify(newCoffee)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.insertedId){
        Swal.fire({
          title: 'Success!',
          text: 'Coffee Added Successfully!',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
      }
    })
  }

  return (
    <div className="bg-[#f4f3f0] w-10/12 mx-auto space-y-8 py-16">
      <h3 className="text-center text-3xl font-bold">Add New Coffee</h3>
      <p className="w-9/12 mx-auto text-center opacity-50">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
      <form onSubmit={handleAddCoffee}>
        {/* form name quantity row */}
        <div className="md:flex gap-3 w-10/12 mx-auto mb-7">
        <div className="md:w-1/2">
        <label className="opacity-60 input input-bordered flex items-center gap-2">
          Name
          <input type="text" className="grow w-full"  name="name" />
        </label>
        </div>
        <div className="md:w-1/2">
        <label className="input opacity-60 input-bordered flex items-center gap-2">
         Quantity
          <input type="text" className="grow" 
          name="quantity"/>
        </label>
        </div>
        </div>
        {/* form supplier taste row */}
        <div className="md:flex gap-3 w-10/12 mx-auto mb-7">
        <div className="md:w-1/2">
        <label className="opacity-60 input input-bordered flex items-center gap-2">
          Supplier
          <input type="text" className="grow w-full"  name="supplier" />
        </label>
        </div>
        <div className="md:w-1/2">
        <label className="opacity-60 input input-bordered flex items-center gap-2">
         Taste
          <input type="text" className="grow"  
          name="taste"/>
        </label>
        </div>
        </div>
        {/* form category details row */}
        <div className="md:flex gap-3 w-10/12 mx-auto mb-7">
        <div className="md:w-1/2">
        <label className="opacity-60 input input-bordered flex items-center gap-2">
        Category
          <input type="text" className="grow w-full"  name="category" />
        </label>
        </div>
        <div className="md:w-1/2">
        <label className="opacity-60 input input-bordered flex items-center gap-2">
         Details
          <input type="text" className="grow"  
          name="details"/>
        </label>
        </div>
        </div>
        {/* form row */}
        <div className="md:flex gap-3 w-10/12 mx-auto mb-7">
        <div className="w-full">
        <label className="opacity-60 input input-bordered flex items-center gap-2">
          Photo URL
          <input type="text" className="grow w-full"  name="photo" />
        </label>
        </div>    
        </div>
        {/* form row */}
        
        <div className="w-10/12 mx-auto">
        <input type="submit" value="Add Coffee" className="btn btn-block bg-[#d2b48c] border-2 border-[#776763] text-[#776763] " />
        </div>

      </form>
    </div>
  );
};

export default AddCoffee;
