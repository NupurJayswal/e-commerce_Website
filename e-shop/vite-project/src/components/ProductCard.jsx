import React from "react";
import { FaStar } from "react-icons/fa";
import {useDispatch} from "react-redux"
import { addToCart } from "../redux/cartSlice";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch()
  const handleAddToCart = (e,product) =>{
    e.stopPropagation()
    e.preventDefault()
    dispatch(addToCart(product))
    toast.success("Product added successfully!");

  }
  return (
    <Link to = {`/product/${product.id}`}>
    <div className="bg-white p-4 shadow rounded relative border transform transition:transform duration-300 hover:scale-105">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-contain mb-4"
      />
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-500">${product.price}</p>
      <div className="flex items-center mt-2">
        <FaStar className="text-yellow-500" />
        <FaStar className="text-yellow-500" />
        <FaStar className="text-yellow-500" />
        <FaStar className="text-yellow-500" />
      </div>
      <div className="absolute bottom-4 right-2 flex items-center justify-center w-8 h-8 bg-red-600 group text-white text-sm rounded full hover:w-32 hover:bg-red-700"
      onClick={(e)=>handleAddToCart(e,product)}>
        <span className = "group-hover:hidden">+</span>
        <span className = "hidden group-hover:block">Add to cart</span>
      </div>
    </div>
    </Link>
  );
};

export default ProductCard;
