import React from 'react';
import { Link } from 'react-router-dom';
function LogoutPage() {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <h1 className="text-2xl font-bold text-gray-800">Logout Successful!</h1>
                <p className="text-gray-600 mt-2">You have been logged out. Have a great day!</p>
                
                <Link to="/" className="mt-4 inline-block bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition">Go to Login Page</Link>
            </div>
        </div>
    );
}

export default LogoutPage;
