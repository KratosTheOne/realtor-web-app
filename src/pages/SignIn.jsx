import React, { useState } from 'react';
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import OAuth from '../components/OAuth';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { toast } from "react-toastify"; 

const SignIn = () => {

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const[formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }

  const onSubmit = async(e) => {
    
    e.preventDefault();
    
    try {

      const auth = getAuth();
      const userCredentials = await signInWithEmailAndPassword(auth, email, password);

      if(userCredentials.user) {
        navigate("/");
      }
      
    } catch (error) {
      
      toast.error("Bad user credentials")

    }
  }

  return (
    <section>
      <h1 className="text-3xl text-center font-se,ibold mt-6">Sign In</h1>
      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <img 
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG9tZSUyMGtleXN8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60" 
            alt="key"
            className="w-full rounded-2xl" 
          />
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
          <form onSubmit={onSubmit}>
            <input 
              className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded-md transition ease-in-out" 
              type="email" 
              id="email" 
              placeholder="Email Address" 
              value={email}
              onChange={handleChange}
            ></input>
            <div className="relative mb-6">
              <input 
                className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded-md transition ease-in-out" 
                type={showPassword ? "text" : "password"} 
                id="password" 
                placeholder="Password" 
                value={password}
                onChange={handleChange}
              ></input>
              {showPassword ? (
                <AiFillEyeInvisible 
                  className="absolute right-3 top-3 text-xl cursor-pointer"
                  onClick={() => setShowPassword(
                    (prevState) => !prevState
                  )}
                />
              ) : (
                <AiFillEye 
                  className="absolute right-3 top-3 text-xl cursor-pointer"
                  onClick={() => setShowPassword(
                    (prevState) => !prevState
                  )}
                />
              )}
            </div>
            <div 
              className="flex justify-between whitespace-nowrap text-sm sm:text-lg"
            >
              <p className="mb-6">
                Don't have an account?
                <Link 
                  to="/sign-up"
                  className="text-red-500 hover:text-red-700 transition duration-200 ease-in-out ml-1"
                > 
                  Register
                </Link>
              </p>
              <p>
                <Link 
                  to="/forgot-password"
                  className="text-blue-500 hover:text-blue-800 transition duration-200 ease-in-out"
                >
                  Forgot Password?
                </Link>
              </p>
            </div>
            <button
            type="submit"
            className="w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800"
            >
              Sign In
            </button>
            <div 
              className="flex items-center my-4 before:border-t before:flex-1 before:border-gray-300 after:border-t after:flex-1 after:border-gray-300"
            >
              <p 
                className="text-center font-semibold mx-4"
              >
                OR
              </p>
            </div>
            <OAuth />
          </form>
        </div>
      </div>
    </section>
  )
}

export default SignIn