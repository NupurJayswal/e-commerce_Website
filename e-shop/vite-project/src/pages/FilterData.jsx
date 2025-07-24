// pages/FilterData.js
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const FilterData = () => {
  const filteredData = useSelector((state) => state.products.filteredData);

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Search Results</h2>
      {filteredData.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {filteredData.map((product) => (
            <Link to={`/product/${product.id}`} key={product.id}>
              <div className="border p-4">
                <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
                <h3 className="font-semibold mt-2">{product.name}</h3>
                <p className="text-gray-700">₹{product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterData;
