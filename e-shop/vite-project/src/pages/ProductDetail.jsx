import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import Cart from "./Cart";

const ProductDetail = () => {
  const { id } = useParams();
  const products = useSelector((state) => state.product.products);
  const [product, setProduct] = useState();

  useEffect(() => {
    const newProduct = products.find((product) => product.id === parseInt(id));
    setProduct(newProduct);
  }, [id, products]);

  if (!product) return <div className="text-center py-8">Loading...</div>;

  return (
    <div className="container mx-auto px-4 md:px-16 py-8">
      <div className="flex flex-col md:flex-row items-center space-y-8 md:space-x-8 md:space-y-0">
        
        <div className="flex justify-center w-full md:w-1/2">
          <img
            src={product.image}
            alt={product.name}
           
            className="w-full max-w-md object-cover rounded-lg shadow-lg"
          />
        </div>

      
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">{product.name}</h2>
          <p className="text-xl text-gray-600 mb-4">{`$${product.price.toFixed(2)}`}</p>
          <p className="text-gray-700 mb-6">{product.description}</p>
          <div className="flex space-x-4">
            
            <button className="flex items-center justify-center bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition duration-300">
              <FaShoppingCart className="mr-2" />
              Add to Cart
            </button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
