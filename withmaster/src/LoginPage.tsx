import React from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
    let navigate = useNavigate();

    const handleLogin = (event: { preventDefault: () => void; }) => {
        event.preventDefault(); // Prevents form submission default behavior
        // Perform login logic here (e.g., API call)
        navigate('/'); // Redirect to home page after login
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-96 text-center">
                <h2 className="text-2xl font-bold text-gray-800">Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="mb-4 text-left">
                        <label className="block text-gray-700">Email</label>
                        <input type="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Enter your email" required />
                    </div>
                    <div className="mb-4 text-left">
                        <label className="block text-gray-700">Password</label>
                        <input type="password" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Enter your password" required />
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">Login</button>
                </form>
                <p className="text-gray-600 mt-4">Don't have an account?</p>
                <a href="/signup" className="mt-2 inline-block bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition">
                    Sign Up
                </a>
            </div>
        </div>
    );
}

export default LoginPage;
