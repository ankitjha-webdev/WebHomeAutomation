import React from 'react'
import axios from "axios";
import { Button, Checkbox, Input, Switch } from '@material-tailwind/react';
import { useLocation } from 'react-router';
import { setId } from '@material-tailwind/react/components/Tabs/TabsContext';
const AddDeviceModel = ({ device }) => {
  const [showModal, setShowModal] = React.useState(false);
  const [devname, setDevname] = React.useState("");
  const [devdescription, setDevdescription] = React.useState("");
  const [id, setId] = React.useState();
  const [state, setState] = React.useState(true);
  const [error, setError] = React.useState("");
  const [success, setSuccess] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const location = useLocation();
// console.log(device);
  const path = location.pathname.split('/')[2];
  console.log(path);
  console.log(
    
  );
  // console.log(device[0]._id);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");
    try {
      const response = await axios.put("http://localhost:4000/api/room/" + path  , {
        devname,
        devdescription,
        state,
      });
      setSuccess(response.data.message);
      setDevname("");
      setDevdescription("");
    } catch (error) {
      setError(error.response.data.message);
    }
    setLoading(false);
  }
  return (
    <div>
      <Button
        className="w-full border-4 border-gray-100 px-6 py-4 skew-x-4 skew-y-1 mt-6 text-xs font-medium text-white uppercase transition-colors duration-200 transform bg-[#3ca2db] shadow-lg rounded-md lg:w-auto hover:bg-blue-400 focus:outline-none focus:bg-blue-500"
        type="button"
        onClick={() => setShowModal(true)} >
        Add Device!
      </Button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div
              className="
        border-t-8
        border-[#3ca2db]
          flex flex-col
          rounded-md
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
                Enter your details to add your device
              </div>

              <div className="mt-10">
                <form onClick={handleSubmit}>
                  <div className='hidden'>
                    <input  value={id} onChange={(e) => setId(e.target.value)}/>
                  </div>
                  <div className="flex flex-col mb-5">
                    <div className="relative">
                      <Input
                        id="name"
                        type="text"
                        name="name"
                        value={devname}
                        onChange={(e) => setDevname(e.target.value)}
                        label="Name"
                        icon={<i class="fa-solid fa-house-laptop"></i>}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col mb-5">
                    <div className="relative">
                      <Input
                        id="desc"
                        type="text"
                        name="description"
                        value={devdescription}
                        label="Description"
                        onChange={(e) => setDevdescription(e.target.value)}
                        icon={<i class="fa-solid fa-circle-info"></i>}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col mb-5">
                    <div className="relative">
                      <Switch
                        id="status"
                        name="status"
                        checked={state}
                        label="Status (ON/OFF)"
                        onChange={(e) =>{
                          if(e.target.checked){
                            setState(true);
                          } else {
                            setState(false);
                          }
                        }}
                      />
                    </div>
                  </div>

                  <div className="flex w-full">

                    {/* Add button */}
                    <Button
                      type="submit"
                 
                      disabled={loading}
                      className="flex mt-2 items-center justify-center text-white text-sm sm:text-basebg-[#3ca2db] hover:bg-blue-400 py-2 w-full transition duration-150 ease-in mx-3 "
                    >
                      <span className="mr-2 uppercase text-base">{loading ? 'loading.... ' : 'Add'}</span>
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
                    </Button>

                    {/* Close Button */}
                    <Button
                      className=" flex
                    mt-2
                    items-center
                    justify-center
                     focus:outline-none
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
                    </Button>
                  </div>
                  {/* error show */}
                  {error ? (
                    <div className="text-red-500 text-sm mt-4 mx-auto">{error}</div>
                  ) : null}
                  {success ? (
                    <div className="text-green-500 text-sm mt-4">{success}</div>
                  ) : null}
                </form>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  )
}

export default AddDeviceModel