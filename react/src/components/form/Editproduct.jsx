import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditProduct = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
    image: ""
  });

  // Get existing product
  useEffect(() => {

    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

  }, [id]);


  // Handle input
  const handleChange = (e) => {

    setProduct({
      ...product,
      [e.target.name]: e.target.value
    });

  };


  // Update product
  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const res = await axios.put(
        `https://fakestoreapi.com/products/${id}`,
        product
      );

      console.log(res.data);

      alert("Product updated successfully!");

      navigate("/products");

    } catch (err) {

      console.log(err);

    }

  };


  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-8">

      <div className="bg-white w-full max-w-xl p-8 rounded-xl shadow-md">

        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Edit Product
        </h1>


        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Product Name */}
          <div>

            <label className="block font-medium text-gray-700 mb-2">
              Product Name
            </label>

            <input
              type="text"
              name="title"
              value={product.title}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400"
            />

          </div>


          {/* Price */}
          <div>

            <label className="block font-medium text-gray-700 mb-2">
              Price
            </label>

            <input
              type="number"
              name="price"
              value={product.price}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400"
            />

          </div>


          {/* Category */}
          <div>

            <label className="block font-medium text-gray-700 mb-2">
              Category
            </label>

            <input
              type="text"
              name="category"
              value={product.category}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400"
            />

          </div>


          {/* Image */}
          <div>

            <label className="block font-medium text-gray-700 mb-2">
              Image URL
            </label>

            <input
              type="text"
              name="image"
              value={product.image}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400"
            />

          </div>


          {/* Description */}
          <div>

            <label className="block font-medium text-gray-700 mb-2">
              Description
            </label>

            <textarea
              name="description"
              value={product.description}
              onChange={handleChange}
              rows="5"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400"
            />

          </div>


          {/* Buttons */}
          <div className="flex gap-3 pt-3">

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition"
            >
              Update Product
            </button>

            <button
              type="button"
              onClick={() => navigate("/products")}
              className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-medium transition"
            >
              Cancel
            </button>

          </div>

        </form>

      </div>

    </div>
  );
};

export default EditProduct;