import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Api_testing = () => {
    const [value, setValue] = useState([]);


    const fetchData = async () => {
        const value = await axios.get("https://fakestoreapi.com/products");
        console.log(value.data);
        setValue(value.data);
    };
    useEffect(() => {
        fetchData();
    }, []);

    return(
        <div className="min-h-screen bg-gray-100 p-8">

    <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        Fake Store Products
    </h1>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {value.map((product) => (

            <div
                key={product.id}
                className="bg-white rounded-2xl overflow-hidden shadow-md 
                           hover:shadow-2xl hover:-translate-y-2 
                           transition-all duration-300"
            >

                {/* Image */}
                <div className="h-[250px] bg-gray-50 flex items-center justify-center p-5">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="w-[180px] h-[180px] object-contain 
                                   hover:scale-110 transition duration-300"
                    />
                </div>

                {/* Product Details */}
                <div className="p-5">

                    {/* Product ID */}
                    <span className="text-xs bg-gray-200 px-3 py-1 rounded-full">
                        Product #{product.id}
                    </span>

                    {/* Title */}
                    <h2 className="text-lg font-bold text-gray-800 mt-4 line-clamp-2">
                        {product.title}
                    </h2>

                    {/* Description */}
                    <p className="text-sm text-gray-500 mt-3 line-clamp-3">
                        {product.description}
                    </p>

                    {/* Price + Button */}
                    <div className="flex items-center justify-between mt-5">

                        <p className="text-2xl font-bold text-green-600">
                            ${product.price}
                        </p>

                        <button
                            className="bg-black text-white px-4 py-2 
                                       rounded-lg hover:bg-gray-800 
                                       transition cursor-pointer"
                        >
                            Add to Cart
                        </button>

                    </div>

                </div>

            </div>

        ))}

    </div>

</div>
    );
};

export default Api_testing;