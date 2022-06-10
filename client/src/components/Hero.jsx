import { useEffect, useState } from 'react';
import login from '../images/smart-home-banner-img.gif'
const Hero = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
       fetch("/api")
       .then((res) => res.json())
       .then((data) => setData(data.heading))
     
     }, [])
     
    return (
        <div>
            <div className='text-red-600 mx-auto max-w-7xl'>
                <header className="bg-white">
                   
                    <div className="container px-6 py-16 mx-auto">
                        <div className="items-center lg:flex">
                            <div className="w-full lg:w-1/2">
                                <div className="lg:max-w-lg">
                                    <h1 className="text-2xl font-semibold text-gray-800 uppercase  lg:text-3xl">
                                    {!data ? "Loading..." : data}
                                    
                                    </h1>
                                    <p className="mt-2 text-gray-600 dark:text-gray-400">
                                       Home Automation system consist of a servers and sensors.
                                        These servers are remote servers located on Internet which help
                                        you to manage and process the data without the need of personalised computers.
                                    </p>
                                    <button className=" w-full border-4 border-gray-100 px-6 py-4 skew-x-2 skew-y-2 mt-6 text-xs font-medium text-white uppercase transition-colors duration-200 transform bg-[#3ca2db] shadow-lg rounded-md lg:w-auto hover:bg-blue-400 focus:outline-none focus:bg-blue-500">
                                        Signup for free!
                                    </button>
                                </div>
                            </div>
                            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                                <img
                                    className="w-full h-full lg:max-w-2xl"
                                    src={login}
                                    alt="Catalogue-pana.svg"
                                />
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        </div>
    )
}

export default Hero