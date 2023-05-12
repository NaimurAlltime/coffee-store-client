// import React from "react";
import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleAddCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const coffeeName = form.coffeeName.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const newCoffee = {
      coffeeName,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(newCoffee);

    // data fetching post api
    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire("Success!", "New Coffee Added Successfully!", "success");
          form.reset();
        }
      });
  };

  return (
    <div className="md:mx-24 bg-[#F4F3F0] p-24">
      <h3 className="text-3xl font-bold text-center">Add a Coffee</h3>

      <form onSubmit={handleAddCoffee}>
        {/* form name and quantity row  */}
        <div className="md:flex mt-4 mb-7">
          <div className="form-control md:w-1/2 mr-4">
            <label className="label">
              <span className="label-text">Coffee Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Enter coffee Name"
                className="input input-bordered w-full"
                name="coffeeName"
                id="coffeeName"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Enter coffee Quantity"
                className="input input-bordered w-full"
                name="quantity"
                id="quantity"
              />
            </label>
          </div>
        </div>
        {/* form Supplier and taste row  */}
        <div className="md:flex mt-4 mb-7">
          <div className="form-control md:w-1/2 mr-4">
            <label className="label">
              <span className="label-text">Supplier</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Enter coffee Supplier"
                className="input input-bordered w-full"
                name="supplier"
                id="supplier"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ">
            <label className="label">
              <span className="label-text">Taste</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Enter coffee Taste"
                className="input input-bordered w-full"
                name="taste"
                id="taste"
              />
            </label>
          </div>
        </div>
        {/* form category and details row  */}
        <div className="md:flex mt-4 mb-7">
          <div className="form-control md:w-1/2 mr-4">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Enter coffee Category Name"
                className="input input-bordered w-full"
                name="category"
                id="category"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Enter coffee Details"
                className="input input-bordered w-full"
                name="details"
                id="details"
              />
            </label>
          </div>
        </div>
        {/* form photo url row  */}
        <div className="md:flex mt-4 mb-7">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Enter coffee Photo URL"
                className="input input-bordered w-full"
                name="photo"
                id="photo"
              />
            </label>
          </div>
        </div>
        <div className="md:flex mt-4 mb-7">
          <div className="form-control w-full">
            <input
              className="input input-bordered font-bold bg-[#D2B48C] w-full"
              type="submit"
              value="Add Coffee"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddCoffee;
