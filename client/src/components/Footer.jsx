import { Link } from 'react-router-dom'
import github from '../images/github.png'
import linkedin from '../images/linkedin.png'
export const Footer = () => {

    return (
        <footer className="bg-sky-50 ">  
            <div className="container  px-6 py-4">
                <div className="flex flex-wrap justify-center "> 
                    <div className="w-full lg:w-auto text-center lg:text-left">
                        <p className="text-sm text-gray-600 leading-loose">
                            © 2022 All rights reserved. 
                        </p> 
                    </div>
                    <div className="w-full lg:w-auto text-center mx-2 lg:text-left">
                        <p className="text-sm text-gray-600 leading-loose">
                              Made with <span className="text-red-600">❤</span> by <Link to="
                            https://www.linkedin.com/in/ankitkumarcse/" className="text-gray-600 font-bold">Ankit Kumar</Link>
                        </p>
                      <div className='flex space-x-4'>
                      <a href="https://github.com/ankitjha-webdev/" >  <img src={github} alt="" srcset="" /> </a>
                       <a href="https://www.linkedin.com/in/ankitkumarcse/" >  <img src={linkedin} width="32" height="32" alt="" srcset="" /> </a>
                      </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
