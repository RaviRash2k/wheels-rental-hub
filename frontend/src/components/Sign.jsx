import React, { useEffect, useState } from "react";
import { useUiStore } from '../../store/UiStore';
import { authStore } from '../../store/authStore';
import axios from 'axios';

const Sign = () => {

    const {signPopup, setSignPopup, signState, setSignState} = useUiStore();
    const {login} = authStore();

    // user data
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        rePassword: ""
    });

    // handle change 
    const handleChange = (e) => {
        setData({ 
            ...data, 
            [e.target.name]: e.target.value 
        });
    };

    //on submit
    const handleSubmit = async (e) => {
        e.preventDefault();

        //url
        const endpoint = signState === 'login' ? '/api/user/login' : '/api/user/register';
        const url = `http://localhost:3000${endpoint}`;

        const response = await axios.post(url, data);

        if(response.data.success){

            setData({
                name: "",
                email: "",
                password: "",
                rePassword: ""
            })

            if(signState === 'login'){
                login(response.data.token, response.data.user);
                setSignPopup(false)

            }else{
                setSignState('login');
                alert("Registration successful! Please login to your account.");
            }

        }else{
            alert(response.data.message)
        }
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">

            {/* overlay blocks clicks */}
            <div className="absolute inset-0 bg-black/30 backdrop-blur-sm pointer-events-auto" onClick={() => setSignPopup(!signPopup)} />

            {/* login card */}
            <div className="relative z-10 w-full max-w-md bg-card rounded-2xl shadow-2xl p-8 pointer-events-auto">

                    <h2 className="text-3xl font-bold text-theme text-center mb-6">
                        {signState === 'register' ? 'Register' : 'Login'}
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-4">

                        {/* name */}
                        {signState === 'register' && 
                            <input
                                name="name"
                                value={data.name}
                                onChange={handleChange}
                                type="text"
                                required
                                placeholder="Enter your name"
                                className="w-full px-4 py-3 rounded-lg bg-card text-text border border-theme focus:outline-none focus:ring-2 focus:ring-theme"
                            />
                        }

                        {/* email */}
                        <input
                            name="email"
                            value={data.email}
                            onChange={handleChange}
                            type="email"
                            required
                            placeholder="Enter your email"
                            className="w-full px-4 py-3 rounded-lg bg-card text-text border border-theme focus:outline-none focus:ring-2 focus:ring-theme"
                        />

                        {/* password */}
                        <input
                            name="password"
                            value={data.password}
                            onChange={handleChange}
                            type="password"
                            required
                            placeholder="Enter your password"
                            className="w-full px-4 py-3 rounded-lg bg-card text-text border border-theme focus:outline-none focus:ring-2 focus:ring-theme"
                        />

                        {/* re-password */}
                        {signState === 'register' && 
                            <input
                                name="rePassword"
                                value={data.rePassword}
                                onChange={handleChange}
                                type="password"
                                required
                                placeholder="Enter password again"
                                className="w-full px-4 py-3 rounded-lg bg-card text-text border border-theme focus:outline-none focus:ring-2 focus:ring-theme"
                            />
                        }
                        
                        {/* forgot */}
                        {signState === 'login' && <p className='w-full px-4 pb-3 text-text text-right'> Forgot password? </p>}

                        {/* submit */}
                        <button
                            type="submit"
                            className="w-full py-3 rounded-lg bg-theme text-nav-text font-semibold hover:opacity-90 transition"
                        >
                            {signState == 'login' ? 'Login' : 'Register'}
                        </button>

                    </form>

                    {signState === 'login' ?
                        <p className="text-sm text-center text-text/70 mt-4">
                            Don’t have an account? <span className="text-theme cursor-pointer" onClick={() => setSignState("register")}>Sign up</span>
                        </p> 
                        :
                        <p className="text-sm text-center text-text/70 mt-4">
                            Already have an account? <span className="text-theme cursor-pointer" onClick={() => setSignState("login")}>Sign in</span>
                        </p>

                    }
                    
            </div>
        </div>
  )
}

export default Sign
