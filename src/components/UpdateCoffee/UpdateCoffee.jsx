// import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const {
    _id,
    coffeeName,
    quantity,
    supplier,
    taste,
    category,
    details,
    photo,
  } = coffee;
  const handleUpdateCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const coffeeName = form.coffeeName.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const updatedCoffee = {
      coffeeName,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(updatedCoffee);

    // data fetching post api
    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire("Success!", "Coffee Updated Successfully!", "success");
          // form.reset();
        }
      });
  };
  return (
    <div>
      <h2 className="text-3xl font-bold text-center">Update a coffee</h2>
      <form onSubmit={handleUpdateCoffee}>
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
                defaultValue={coffeeName}
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
                defaultValue={quantity}
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
                defaultValue={supplier}
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
                defaultValue={taste}
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
                defaultValue={category}
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
                defaultValue={details}
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
                defaultValue={photo}
              />
            </label>
          </div>
        </div>
        <div className="md:flex mt-4 mb-7">
          <div className="form-control w-full">
            <input
              className="input input-bordered font-bold bg-[#D2B48C] w-full"
              type="submit"
              value="Update Coffee"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateCoffee;
