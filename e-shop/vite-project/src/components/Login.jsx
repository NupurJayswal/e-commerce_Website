import React from 'react'

const Login = ({handleRegisterClick}) => {
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
        <form>
            <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input 
                    id="email"
                    type="text" 
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Enter your email"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <input 
                    id="password"
                    type="password" 
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Enter your password"
                />
            </div>
            <div className="flex items-center justify-between mb-4">
                <label className="flex items-center text-sm text-gray-700">
                    <input type="checkbox" className="mr-2"/>
                    Remember Me
                </label>
                <a href="#" className="text-sm text-indigo-600 hover:text-indigo-800">Forgot Password?</a>
            </div>
            <div className="mb-6">
                <button 
                    type="submit"
                    className="w-full py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                    Login
                </button>
            </div>
        </form>
        <div className="text-center">
            <span className="text-sm text-gray-700">Don't have an Account?</span>
            <button className="ml-2 text-sm text-indigo-600 hover:text-indigo-800" onClick={handleRegisterClick}>Sign Up</button>
        </div>
    </div>
  )
}

export default Login;
