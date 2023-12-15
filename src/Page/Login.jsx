import React, { useState } from "react";
import { BiShow, BiHide } from "react-icons/bi";
import { Link, Navigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginRedux } from "../redux/userSlice";

const Login = () => {
  const [showPassword, SetShowPassword] = useState(false);

  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const nagivate = useNavigate();
  const userData = useSelector((state) => state);

  const dispatch = useDispatch();

  const handleshowPassword = () => {
    SetShowPassword((preve) => !preve);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    if (email && password) {
      const fetchData = await fetch(
        `${import.meta.env.VITE_APP_SERVER_DOMAIN}login`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const dataRes = await fetchData.json();
      console.log(dataRes);

      toast(dataRes.message);

      if (dataRes.alert) {
        dispatch(loginRedux(data.Res));
        setTimeout(() => {
          nagivate("/");
        }, 1000);
      }
    } else {
      alert("Please Enter required fields");
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
        <form
          onSubmit={handleSubmit}
          className="w-full py-3 flex flex-col text-left"
        >
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
            <div className="flex py-0 bg-slate-200 px-2  rounded mt-1 mb-2  focus-within:outline focus-within:outline-blue-300 ">
              <input
                type={showPassword ? "text" : "Password"}
                id="password"
                name="password"
                className="w-full mt-1 mb-2 bg-slate-200 px-2 py-1 border-none outline-none "
                value={data.password}
                onChange={handleOnChange}
              />{" "}
              <div
                className="flex  text-xl cursor-pointer"
                onClick={handleshowPassword}
              >
                {showPassword ? <BiShow /> : <BiHide />}
              </div>
            </div>
          </div>
          <Link to={"/"}>
            <button
              type="submit"
              className=" w-fit px-3  m-auto bg-red-500 hover:bg-red-600 cursor-pointer text-white text-xl font-medium flex justify-center items-center text-center py-2 rounded-full mt-4 "
            >
              Log in
            </button>
          </Link>
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
