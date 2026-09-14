import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Product_details = () => {
    const { id } = useParams();
    const [product, setproduct] = useState({});
    const [loading, setloading] = useState(false);

    const fetchData = async () => {
        setloading(true);
        await axios.get(`https://fakestoreapi.com/products/${id}`)
        .then((res) => {
            setproduct(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
        setloading(false);
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (loading) {
        return <h1 className= "text-6xl text-center" >Loading...</h1>;
    }

    return (
    <div className="flex felx-col justify-center items-center">
        <h1 className="text-6xl font-extrabold"> TITLE: {product.title}</h1>
        <img src={product.image} alt={product.title} className="w-96 h-96 object-contain" />
        <p className="text-2xl font-bold"> PRICE: ${product.price}</p>
        <p className="text-2xl font-bold"> CATEGORY: {product.category}</p>
        <p className="text-2xl font-bold"> RATING: {product.rating?.rate}</p>
        <p className="text-2xl font-bold"> COUNT: {product.rating?.count}</p>
        <p className="text-2xl font-bold"> DESCRIPTION: </p>
        <p> {product.description}</p>
    </div>
  );
};

export default Product_details;