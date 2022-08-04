
import { Link } from 'react-router-dom'
export const Nav = () => {
    return (
        <div>
            <nav>

                <div className="container px-6 py-3 mx-auto lg:flex lg:justify-between lg:items-center">
                    <div className="flex items-center justify-between">
                        <div>
                            <Link
                                className="text-2xl font-bold text-[#3ca2db]  lg:text-3xl hover:text-sky-400    "
                                to="/"
                            >
                                Home <span className='text-gray-600 animate-pulse'>Automation</span>
                            </Link>
                        </div>
                        {/* Mobile menu button  */}
                        <div className="flex lg:hidden">
                            <button
                                type="button"
                                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                                aria-label="toggle menu"
                            >
                                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                                    <path
                                        fillRule="evenodd"
                                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                    {/* Mobile Menu open: "block", Menu closed: "hidden"  */}
                    <div className="items-center lg:flex text-gray-800 hidden">
                        <div className="flex flex-col lg:flex-row lg:mx-6">
                            <Link to='/' className="my-1 text-sm font-medium text-gray-700  hover:text-blue-500 dark:hover:text-blue-400 lg:mx-4 lg:my-0"> Home </Link>
                            <Link to='/dashboard' className="my-1 text-sm font-medium text-gray-700  hover:text-blue-500 dark:hover:text-blue-400 lg:mx-4 lg:my-0"> Dashboard </Link>
                            <Link to='/contact' className="my-1 text-sm font-medium text-gray-700 hover:text-blue-500 dark:hover:text-blue-400 lg:mx-4 lg:my-0"> Contact </Link>
                            <Link to='/about' className="my-1 text-sm font-medium text-gray-700  hover:text-blue-500 dark:hover:text-blue-400 lg:mx-4 lg:my-0"> About </Link>
                            <Link className="my-1 text-sm font-medium text-gray-700  hover:text-blue-500 dark:hover:text-blue-400 lg:mx-4 lg:my-0" to="/login"> Login</Link>
                        </div>
                        <div className="flex justify-center lg:block">
                            <Link
                                className="relative text-gray-700 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300"
                                to="/"
                            >
                                <svg
                                    className="w-5 h-5"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z"
                                        stroke="current Color"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                <span className="absolute top-0 left-0 p-1 text-xs text-white bg-blue-500 rounded-full" />
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="bg-gray-50 animate-pulse border--4 border-[#3ca2db] border-t-8 text-[#3ca2db] p-4" role="alert">
                <p className="font-bold"></p>
                <p></p>
            </div>
        </div>
    )
}
