import React from "react";
import { Link } from "react-router-dom";
import close from "../images/close.svg";
import axios from "axios";
export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);
  
  // axios call to get all rooms
  // const getRooms = async () => {
  //   const response = await axios.get("/api/rooms");
  //   console.log(response.data);
  // }
  


  return (
    <>
      <button
        className="w-full border-4 border-gray-100 px-6 py-4 skew-x-4 skew-y-1 mt-6 text-xs font-medium text-white uppercase transition-colors duration-200 transform bg-[#3ca2db] shadow-lg rounded-md lg:w-auto hover:bg-blue-400 focus:outline-none focus:bg-blue-500"
        type="button"
        onClick={() => setShowModal(true)} >
        Create a Room!
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >

            {/*content*/}

            <div
              className="
        border-t-8
        border-[#3ca2db]
          flex flex-col
          bg-white
          shadow-md
          px-4
          sm:px-6
          md:px-8
          lg:px-10
          py-8
          w-50
          max-w-md
        "
            >
              <div className="font-medium  self-center text-xl sm:text-3xl text-gray-800">
                Web Home Automation
              </div>
              <div className="mt-4 self-center text-xl sm:text-sm text-gray-800">
                Enter your details to create a room
              </div>

              <div className="mt-10">
                <form >
                  <div className="flex flex-col mb-5">
                    <label
                      for="name"
                      className="mb-1 text-xs tracking-wide text-gray-600"
                    > Name:</label
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
                   
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-blue-400
                  "
                        placeholder="Room name"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col mb-5">
                    <label
                      for="desc"
                      className="mb-1 text-xs tracking-wide text-gray-600"
                    >Description:</label
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
                        id="desc"
                        type="text"
                        name="desc"
                        className="
                    text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-blue-400
                  "
                        placeholder=" Room description"
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
                  py-2
                  w-full
                  transition
                  duration-150
                  ease-in
                  mx-3
                "
                    >
                      <span className="mr-2 uppercase">Create</span>
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
                    <button
                      className=" flex
                    mt-2
                    items-center
                    justify-center
                    // focus:outline-none
                    text-white
                    text-sm
                    sm:text-base
                    bg-[#3ca2db]
                    hover:bg-blue-400
                    py-2
                    w-full
                    transition
                    duration-150
                    ease-in"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >

                      <span className="mr-2 uppercase">Close</span>
                      {/* <img src={close} className="h-6 w-6" alt=""/> */}
                      <svg fill="#ffffff" viewBox="0 0 30 30" className="h-6 w-6"  >    
                      <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z" />
                      </svg>
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
                <span clasNsme="ml-2"
                >Do you have an account?
                  <Link to="/login"
                    className="text-xs ml-2 text-[#3ca2db] font-semibold"
                  >Login now</Link> </span
                >
              </a>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}