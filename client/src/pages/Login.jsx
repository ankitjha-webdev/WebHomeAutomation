import { Button, Input } from '@material-tailwind/react'
import { useContext, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../context/Context';
import axios from 'axios';

export const Login = () => {
  const userRef = useRef();
  const passwordRef = useRef();
  const {user, dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevents page from refreshing
    dispatch({ type: 'LOGIN_START' });
    try {
      const res = await axios.post('http://localhost:4000/api/auth/login', {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  }
console.log(user);
  return (
    <>
      <div className="grid grid-cols-2 w-auto h-screen items-center  bg-grey-200 ">

        <div className="login-container grid text-center w-1/3 p-10  mx-auto rounded-full ">
          <div className="login-form shadow-2xl p-10">
            <div className="login-form-header ">
              {/* <img src={motherson_logo} className="-mt-20" alt="" sizes="" /> */}
            </div>
            <div className="login-form-body">
              <form onSubmit={handleSubmit}>
                <div className="login-form-input my-4 ">
                  <Input label="Username" ref={userRef} name="username" type="text" color="grey" icon={<i className="fa-solid fa-user"></i>} />
                </div>
                <div className="login-form-input my-4">
                  <Input label="Password" ref={passwordRef} name="password"  type="password" color="grey" icon={<i className="fa-solid fa-key"></i>} />
                </div>
                <div className="login-form-input">
                  <Button color="blue" className="w-full" type="submit" >Login</Button>
                </div>
                <div>
                  <span className="text-sm text-center  space-x-24 text-grey-600">
                    <small className="">
                      <Link to="/forgotpassword" className="cursor-pointer">Forgot Password?</Link>
                    </small>
                    <small className="">
                      <Link to="/register" className="cursor-pointer">Don't have account?</Link>
                    </small>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className=" visible lg:visible md:invisible ">
          {/* <img src={motherson} className=" rounded-2xl shadow-2xl  mx-auto shadow-gray-600 border-grey-400 border-8" alt="" /> */}
        </div>
      </div>
    </>
  )
}
