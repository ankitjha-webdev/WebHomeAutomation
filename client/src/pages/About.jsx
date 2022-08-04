import { Link } from 'react-router-dom'
import about from '../images/about.gif'
export const About = () => {
  return (
    <div>
      <div className="py-16 bg-white  mx-auto max-w-7xl">
        <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div className="md:5/12 lg:w-5/12">
              <img src={about} alt="" loading="lazy"/>
            </div>
            <div className="md:7/12 lg:w-6/12">
              <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                About Us
              </h2>
              <p className="mt-6 text-gray-600">
                A web based home automation system that allows you to control your home from anywhere.
                We are a team of developers who are passionate about building a better world.
              </p>
              <p className="mt-4 text-gray-600">
                {" "}
                A application that is simulating house automation controls that allows remote clients to monitor and control home appliances.
              </p>
              <button className=" w-full border-4 border-gray-100 px-6 py-4 skew-x-2 mt-6 text-xs font-medium text-white uppercase transition-colors duration-200 transform bg-[#3ca2db] shadow-lg rounded-md lg:w-auto hover:bg-blue-400 focus:outline-none focus:bg-blue-500">
                <Link to="/dashboard">Go to Dashboard!</Link>
              </button>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}
