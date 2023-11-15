import React, { useState } from "react";
import { BiShow, BiHide } from "react-icons/bi";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, SetShowPassword] = useState(false);

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  console.log(data);
  const handleshowPassword = () => {
    SetShowPassword((preve) => !prve);
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = data;
    if (email && password) {
      alert("successfull");
    } else {
      alert("Log in not successful");
    }
  };
  return (
    <div className="p-3 md:p-4">
      <div className="w-full max-w-md bg-white m-auto flex flex-col p-4">
        {/* <h1 className='text-center text-2xl font-bold'>
  Sign up
</h1> */}
        <div className="w-20 0verflown-hidden rounded-full drop-shadow-md shadow-md m-auto ">
          <img
            src={
              "https://res.cloudinary.com/dyjo2mvqb/image/upload/v1699870675/istockphoto-1300845620-1024x1024_t1xcxx.jpg"
            }
            className="w-full"
          />
        </div>
        <form className="w-full py-3 flex flex-col text-left">
          <label className="" htmlFor="email">
            Email
          </label>
          <input
            type={"email"}
            id="email"
            name="email"
            className="w-full mt-1 mb-2 bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
            value={data.email}
            onChange={handleOnChange}
          />

          <label className="text-left" htmlFor="password">
            Password
          </label>
          <div>
            <div className="flex  px-2 py-1 rounded mt-1 mb-2  focus-within:outline focus-within:outline-blue-300 "></div>
            <input
              type={showPassword ? "text" : "Password"}
              id="password"
              name="password"
              className="w-full mt-1 mb-2 bg-slate-200 px-2 py-1 border-none outline-none "
              value={data.password}
              onChange={handleOnChange}
            />{" "}
            <span
              className="flex  text-xl cursor-pointer"
              onClick={handleshowPassword}
            >
              {showPassword ? <BiShow /> : <BiHide />}
            </span>
          </div>

          <button className=" w-fit px-3  m-auto bg-red-500 hover:bg-red-600 cursor-pointer text-white text-xl font-medium text-center py-2 rounded-full mt-4 ">
            Log in
          </button>
        </form>
        <p className="text-left text-sm mt-2">
          Don't have account ?{" "}
          <Link to={"/signup"} className="text-red-500 underline ">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
