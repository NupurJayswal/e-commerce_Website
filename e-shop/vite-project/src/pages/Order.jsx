import React from 'react';
import { useNavigate } from 'react-router-dom';

const Order = ({ order }) => {
    const navigate = useNavigate()
  if (!order) {
    return <p>Loading...</p>; 
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price);
  };

  return (
    <div className = "container mx-auto py-8 px-4 md:px-16 lg:px-24">
      <h2 className = "text-2xl font-semibold mb-4">Thank you for your order!</h2>
      <p>Your order has been placed successfully. You will receive an email confirmation shortly.</p>

      <div className = "mt-6 p-4 border rounded-lg bg-gray-100">
        <h3  className = "text-2xl font-semibold mb-4">Order Summary</h3>
        <p>Order Number: {order.orderNumber}</p>

        <div className = "mt-4">
          <h2  className = "text-md font-semibold mb-2">Shipping Information</h2>
          <p>{order.shippingInformation?.address || 'N/A'}</p>
          <p>{order.shippingInformation?.city || 'N/A'}</p>
          <p>{order.shippingInformation?.zip || 'N/A'}</p>
        </div>

        <div className = "mt-4">
          <h3  className = "text-md font-semibold mb-2">Products Ordered</h3>
          {order.products?.map((product) => (
            <div key={product.id} className = "flex justify-between mt-2">
              <p>{product.name} x {product.quantity}</p>
              <p>{formatPrice(product.price * product.quantity)}</p>
            </div>
          ))}
        </div>

        <div className = "mt-4 flex justify-between">
          <span>Total Price: </span>
          <span className = "font-semibold">{formatPrice(order.totalPrice)}</span>
        </div>

        <div className = "mt-6">
          <button className = "bg-green-500 text-white py-2 px-4 hover:bg-green-600">Order Tracking</button>
          <button className = "ml-4 bg-red-600 text-white py-2 px-4 hover:bg-red-800" onClick={() => navigate('/')}>Continue Shopping</button>
        </div>
      </div>
    </div>
  );
};

export default Order;
