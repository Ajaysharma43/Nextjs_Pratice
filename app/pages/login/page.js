"use client";
import { Login } from '@/lib/Slices/Auth/AuthSlice';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function LoginPage() {
    const Success = useSelector((state) => state.Auth.Success)
    const Message = useSelector((state) => state.Auth.Message)
    const navigate = useRouter()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch()
    useEffect(() => {
        if (Success == true) {
            navigate.push('/pages/todo')
        }
    }, [Success])

    const handleSubmit = (e) => {
        e.preventDefault();
        const FormData = {
            email: email,
            password: password
        }
        dispatch(Login({ FormData }))
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form onSubmit={handleSubmit} className="flex flex-col w-full max-w-sm p-8 space-y-4 bg-white rounded shadow-md">
                <h2 className="text-2xl font-bold text-center">Login</h2>
                <div>
                    <h1 className='text-center'>{Message == "Success" ? (<span className='text-green-500'>{Message}</span>):(<span className='text-red-500'>{Message}</span>)}</h1>
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-3 py-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full px-3 py-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <button type="submit" className="w-full px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    Login
                </button>
            </form>
        </div>
    );
}