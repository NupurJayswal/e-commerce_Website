import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import Modal from "./Modal";
import Register from "./Register";
import Login from "./Login";
import { setSearchTerm } from "../redux/productSlice";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [search, setSearch] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(setSearchTerm(search || ""));
    navigate("/filter-data");
  };

  const products = useSelector((state) => state.cart.products);

  const handleLoginClick = () => {
    setIsLogin(true);
    setIsModalOpen(true);
  };

  const handleRegisterClick = () => {
    setIsLogin(false);
    setIsModalOpen(true);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center">
        <div className="text-lg font-bold">
          <Link to="/">e-shop</Link>
        </div>
        <div className="relative flex-1 mx-4">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search Product"
              className="w-full border py-2 px-4 pr-10" // add right padding for icon space
              value={search || ""}
              onChange={(e) => {
                const value = e.target.value;
                setSearch(value);
                dispatch(setSearchTerm(value));
                if (!value.trim()) navigate("/filter-data"); // show all products immediately
              }}
            />
            <button
              type="submit"
              className="absolute top-1/2 right-3 -translate-y-1/2 text-red-500"
            >
              <FaSearch />
            </button>
          </form>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/cart" className="relative">
            <FaShoppingCart className="w-7 h-7" />
            {products.length > 0 && (
              <span className="absolute top-0 text-xs w-3 left-3 bg-red-600 rounded-full flex justify-center items-center text-white">
                {products.length}
              </span>
            )}
          </Link>
          <button
            className="bg-black text-white px-4 py-1 hidden md:block"
            onClick={handleLoginClick}
          >
            Login
          </button>
          <button
            className="bg-black text-white px-4 py-1 hidden md:block"
            onClick={handleRegisterClick}
          >
            Register
          </button>
          <button className="block md:hidden">
            <FaUser />
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center space-x-10 py-4 text-sm font-bold">
        <Link to="/" className="hover:text-gray-600">
          Home
        </Link>
        <Link to="/shop" className="hover:text-gray-600">
          Shop
        </Link>
      </div>
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        {isLogin ? (
          <Login handleRegisterClick={handleRegisterClick} />
        ) : (
          <Register handleLoginClick={handleLoginClick} />
        )}
      </Modal>
    </nav>
  );
};

export default Navbar;
