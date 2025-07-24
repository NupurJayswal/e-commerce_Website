import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Checkout = ({ setOrder }) => {
  const [billingToggle, setBillingToggle] = useState(true);
  const [shippingToggle, setShippingToggle] = useState(false);
  const [paymentToggle, setPaymentToggle] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [shippingInfo, setShippingInfo] = useState({ address: "", city: "", zip: "" });
  const [billingInfo, setBillingInfo] = useState({ name: "", email: "", phone: "" });
  const [cardInfo, setCardInfo] = useState({ cardNumber: "", holderName: "", expiry: "", cvv: "" });
  const [errors, setErrors] = useState({});
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const handleOrder = () => {
    const newErrors = {};

    if (!billingInfo.name.trim()) newErrors.name = "Name is required";
    if (!billingInfo.email.trim()) newErrors.email = "Email is required";
    if (!billingInfo.phone.trim()) newErrors.phone = "Phone is required";

    if (!shippingInfo.address.trim()) newErrors.address = "Address is required";
    if (!shippingInfo.city.trim()) newErrors.city = "City is required";
    if (!shippingInfo.zip.trim()) newErrors.zip = "Zip is required";

    if (paymentMethod === "dc") {
      if (!cardInfo.cardNumber.trim()) newErrors.cardNumber = "Card Number is required";
      if (!cardInfo.holderName.trim()) newErrors.holderName = "Cardholder Name is required";
      if (!cardInfo.expiry.trim()) newErrors.expiry = "Expiry is required";
      if (!cardInfo.cvv.trim()) newErrors.cvv = "CVV is required";
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    const newOrder = {
      products: cart.products,
      orderNumber: "12344",
      shippingInformation: shippingInfo,
      totalPrice: cart.totalPrice,
    };

    setOrder(newOrder);
    navigate("/order-confirmation");
  };

  return (
    <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
      <h3 className="text-2xl font-semibold mb-4">CHECKOUT</h3>

      <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
        <div className="md:w-2/3">
          {/* Billing */}
          <div className="border p-2 mb-6">
            <div className="flex items-center justify-between" onClick={() => setBillingToggle(!billingToggle)}>
              <h3 className="text-lg font-semibold mb-2">Billing Information</h3>
              {billingToggle ? <FaAngleDown /> : <FaAngleUp />}
            </div>
            {billingToggle && (
              <>
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-700">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={billingInfo.name}
                      placeholder="Enter Name"
                      className="w-full px-3 py-2 border"
                      onChange={(e) => setBillingInfo({ ...billingInfo, name: e.target.value })}
                    />
                    {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-gray-700">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={billingInfo.email}
                      placeholder="Enter Email"
                      className="w-full px-3 py-2 border"
                      onChange={(e) => setBillingInfo({ ...billingInfo, email: e.target.value })}
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-gray-700">Phone</label>
                    <input
                      type="text"
                      name="phone"
                      value={billingInfo.phone}
                      placeholder="Enter phone no."
                      className="w-full px-3 py-2 border"
                      onChange={(e) => setBillingInfo({ ...billingInfo, phone: e.target.value })}
                    />
                    {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Shipping */}
          <div className="border p-2 mb-6">
            <div className="flex items-center justify-between" onClick={() => setShippingToggle(!shippingToggle)}>
              <h3 className="text-lg font-semibold mb-2">Shipping Information</h3>
              {shippingToggle ? <FaAngleDown /> : <FaAngleUp />}
            </div>
            {shippingToggle && (
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700">Address</label>
                  <input
                    type="text"
                    name="address"
                    value={shippingInfo.address}
                    placeholder="Enter Address"
                    className="w-full px-3 py-2 border"
                    onChange={(e) => setShippingInfo({ ...shippingInfo, address: e.target.value })}
                  />
                  {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
                </div>

                <div>
                  <label className="block text-gray-700">City</label>
                  <input
                    type="text"
                    name="city"
                    value={shippingInfo.city}
                    placeholder="Enter City"
                    className="w-full px-3 py-2 border"
                    onChange={(e) => setShippingInfo({ ...shippingInfo, city: e.target.value })}
                  />
                  {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
                </div>

                <div>
                  <label className="block text-gray-700">Zip Code</label>
                  <input
                    type="text"
                    name="zip"
                    value={shippingInfo.zip}
                    placeholder="Enter Zip Code"
                    className="w-full px-3 py-2 border"
                    onChange={(e) => setShippingInfo({ ...shippingInfo, zip: e.target.value })}
                  />
                  {errors.zip && <p className="text-red-500 text-sm">{errors.zip}</p>}
                </div>
              </div>
            )}
          </div>

          {/* Payment */}
          <div className="border p-2 mb-6">
            <div className="flex items-center justify-between" onClick={() => setPaymentToggle(!paymentToggle)}>
              <h3 className="text-lg font-semibold mb-2">Payment Methods</h3>
              {paymentToggle ? <FaAngleDown /> : <FaAngleUp />}
            </div>
            {paymentToggle && (
              <div className="space-y-4">
                <div className="flex items-center mb-2">
                  <input type="radio" name="payment" checked={paymentMethod === "cod"} onChange={() => setPaymentMethod("cod")} />
                  <label className="block text-gray-700 ml-2">Cash On Delivery</label>
                </div>

                <div className="flex items-center mb-2">
                  <input type="radio" name="payment" checked={paymentMethod === "dc"} onChange={() => setPaymentMethod("dc")} />
                  <label className="block text-gray-700 ml-2">Debit Card</label>
                </div>

                {paymentMethod === "dc" && (
                  <div className="bg-gray-100 p-4 rounded-lg mb-4">
                    <h3 className="text-xl font-semibold mb-4">Debit Card Information</h3>

                    <div className="mb-4">
                      <label className="block text-gray-700 font-semibold mb-2">Card Number</label>
                      <input
                        type="text"
                        className="border p-2 w-full rounded"
                        placeholder="Enter card Number"
                        value={cardInfo.cardNumber}
                        onChange={(e) => setCardInfo({ ...cardInfo, cardNumber: e.target.value })}
                      />
                      {errors.cardNumber && <p className="text-red-500 text-sm">{errors.cardNumber}</p>}
                    </div>

                    <div className="mb-4">
                      <label className="block text-gray-700 font-semibold mb-2">Card Holder Name</label>
                      <input
                        type="text"
                        className="border p-2 w-full rounded"
                        placeholder="Enter card Holder Name"
                        value={cardInfo.holderName}
                        onChange={(e) => setCardInfo({ ...cardInfo, holderName: e.target.value })}
                      />
                      {errors.holderName && <p className="text-red-500 text-sm">{errors.holderName}</p>}
                    </div>

                    <div className="mb-4">
                      <label className="block text-gray-700 font-semibold mb-2">Expiry Date</label>
                      <input
                        type="text"
                        className="border p-2 w-full rounded"
                        placeholder="Enter Expiry Date"
                        value={cardInfo.expiry}
                        onChange={(e) => setCardInfo({ ...cardInfo, expiry: e.target.value })}
                      />
                      {errors.expiry && <p className="text-red-500 text-sm">{errors.expiry}</p>}
                    </div>

                    <div className="mb-4">
                      <label className="block text-gray-700 font-semibold mb-2">CVV</label>
                      <input
                        type="text"
                        className="border p-2 w-full rounded"
                        placeholder="Enter CVV"
                        value={cardInfo.cvv}
                        onChange={(e) => setCardInfo({ ...cardInfo, cvv: e.target.value })}
                      />
                      {errors.cvv && <p className="text-red-500 text-sm">{errors.cvv}</p>}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Order Summary */}
        <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md border">
          <h4 className="text-xl font-semibold">Order Summary</h4>
          <div className="space-y-4">
            {cart.products.map((product) => (
              <div key={product.id} className="flex justify-between">
                <div className="flex items-center">
                  <img src={product.image} alt="" className="w-16 h-16 object-contain rounded" />
                  <div className="ml-4">
                    <h4 className="text-md font-semibold">{product.name}</h4>
                    <p className="text-gray-600">&{product.price} x {product.quantity}</p>
                  </div>
                </div>
                <div className="text-gray-600">&{product.price} x {product.quantity}</div>
              </div>
            ))}
          </div>

          <div className="mt-4 border-t pt-4 flex justify-between">
            <span>Total Price:</span>
            <span className="font-semibold">${cart.totalPrice.toFixed(2)}</span>
          </div>

          <button className="w-full bg-red-600 text-white py-2 mt-6 hover:bg-red-800" onClick={handleOrder}>
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
