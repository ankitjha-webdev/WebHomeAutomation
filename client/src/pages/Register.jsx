import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export const Register = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false)
   try {
    const res=await axios.post('http://localhost:3000/api/auth/register', {
    username,
    email,
    password,
   });
   res.data && window.location.replace('/login');
   } catch (error) {
    setError(true)
   }
  };
    const getdata = async (e) =>{
      const res= await axios.get("http://localhost:3000/api/users/")
      console.log(res)
    }
    getdata()
  return (
      <>
      
    <div>
         <div
      className="min-h-screen  flex flex-col items-center justify-center "
    >
      <div
        className="
        border-y-8 
        border-[#3ca2db]
          flex flex-col
          bg-white
          shadow-md
          px-4
          sm:px-6
          md:px-8
          lg:px-10
          py-8
          rounded-3xl
          w-50
          max-w-md
        "
      >
        <div className="font-medium self-center text-xl sm:text-3xl text-gray-800">
        Web Home Automation 
        </div>
        <div className="mt-4 self-center text-xl sm:text-sm text-gray-800">
          Enter your details to register
        </div>

        <div className="mt-10">
          <form onSubmit={handleSubmit}>
          <div className="flex flex-col mb-5">
              <label
                for="name"
                className="mb-1 text-xs tracking-wide text-gray-600"
                >Your Username:</label
              >
              <div className="relative">
                <div
                  className="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-gray-400
                  "
                >
                  <i className="fas fa-at text-blue-500"></i>
                </div>

                <input
                  id="name"
                  type="text"
                  name="name"
                  className="
                    text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    rounded-2xl
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-blue-400
                  "
                  placeholder="Enter your name"
                  onClick={e=>setUsername(e.target.value)}
                />
              </div>
            </div>
            
            <div className="flex flex-col mb-5">
              <label
                for="email"
                className="mb-1 text-xs tracking-wide text-gray-600"
                >E-Mail Address:</label
              >
              <div className="relative">
                <div
                  className="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-gray-400
                  "
                >
                  <i className="fas fa-at text-blue-500"></i>
                </div>

                <input
                  id="email"
                  type="email"
                  name="email"
                  className="
                    text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    rounded-2xl
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-blue-400
                  "
                  onClick={e=>setEmail(e.target.value)}
                  placeholder="Enter your email"
                />
              </div>
            </div>
            <div className="flex flex-col mb-6">
              <label
                for="password"
                className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                >Password:</label
              >
              <div className="relative">
                <div
                  className="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-gray-400
                  "
                >
                  <span>
                    <i className="fas fa-lock text-blue-500"></i>
                  </span>
                </div>

                <input
                  id="password"
                  type="password"
                  name="password"
                  className="
                    text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    rounded-2xl
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-blue-400
                  "
                  placeholder="Enter your password"
                  onClick={e=>setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="flex w-full">
              <button
                type="submit"
                className="
                  flex
                  mt-2
                  items-center
                  justify-center
                  // focus:outline-none
                  text-white
                  text-sm
                  sm:text-base
                  bg-[#3ca2db]
                  hover:bg-blue-400
                  rounded-2xl
                  py-2
                  w-full
                  transition
                  duration-150
                  ease-in
                "

              >
                <span className="mr-2 uppercase">Sign Up</span>
                <span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="flex justify-center items-center mt-6">
        <a
          href="/"
          target="_blank"
          className="
            inline-flex
            items-center
            text-gray-700
            font-medium
            text-xs text-center
          "
        >
          <span className="ml-2"
            >Do you have an account?
            <Link to="/login"
              className="text-xs ml-2 text-[#3ca2db] font-semibold"
              >Login now</Link> </span
          >
        </a>
      </div>
    </div>
    </div>
    </>
  )
}
