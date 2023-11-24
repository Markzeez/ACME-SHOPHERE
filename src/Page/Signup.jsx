import React, { useState } from "react";
import { BiShow, BiHide } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { ImagetoBase64 } from "../Component/utility.jsx/imagetoBase64";
import { toast } from "react-hot-toast";

const Signup = () => {
  const nagivate = useNavigate();
  const [showPassword, SetShowPassword] = useState(false);
  const [showConformPassword, SetShowConfirmPasswordConfirm] = useState(false);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmpassword: "",
    image: "",
  });
  console.log(data);
  const handleshowPassword = () => {
    SetShowPassword((preve) => !preve);
  };
  const handleshowConfirmPassword = () => {
    SetShowConfirmPasswordConfirm((preve) => !preve);
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
  const handleUplodProfileImage = async (e) => {
    const data = await ImagetoBase64(e.target.file[0]);
    console.log(data);

    setData((preve) => {
      return {
        ...preve,
        image: data,
      };
    });
  };

  console.log(import.meta.env.VITE_APP_SERVER_DOMAIN);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data)
    const { firstName, lastName, email, password, confirmpassword } = data;
    if (firstName && lastName && email && password && confirmpassword)
      if (password === confirmpassword) {
        const fetchData = await fetch(
          `${import.meta.env.VITE_APP_SERVER_DOMAIN}signup`,
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

        // alert(dataRes.message);
        toast(dataRes.message);
        if (dataRes.alert) {
          // nagivate("/login");
        }
      } else {
        alert("password and confirm password not equal");
      }
    else {
      alert("Please Enter required fields");
    }
  };

  return (
    <div className="p-3 md:p-4">
      <div className="w-full max-w-md bg-white m-auto flex flex-col p-4">
        {/* <h1 className='text-center text-2xl font-bold'>
    Sign up
</h1> */}
        
        <form onSubmit={handleSubmit}  className="w-full py-3 flex flex-col">
        <div className="w-20 h-20 opacity-50 0verflown-hidden rounded-full drop-shadow-md shadow-md m-auto relative ">
          <img
            src={
              data.image
                ? data.image
                : "https://res.cloudinary.com/dyjo2mvqb/image/upload/v1699870675/istockphoto-1300845620-1024x1024_t1xcxx.jpg"
            }
            className="w-full h-full"
          />
          <label htmlFor="profileImage">
            <div className="absolute bottom-0 h-1/3 bg-slate-500 w-full text-center ">
              <p className="text-sm p-1 text-white">Upload</p>
            </div>
            <input
              type={"file"}
              id="profileImage"
              accept="image/"
              className="hidden"
              onChange={handleUplodProfileImage}
            />
          </label>
        </div>
          <label className="text-left" htmlFor="firstName">
            First Name
          </label>
          <input
            type={"text"}
            id="firstName"
            className="w-full mt-1 mb-2 bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
            name="firstName"

            onChange={handleOnChange}
          />

          <label className="text-left" htmlFor="lastName">
            Last Name
          </label>
          <input
            type={"text"}
            id="lastName"
            className="w-full mt-1 mb-2 bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
            name="lastName"
            onChange={handleOnChange}
          />

          <label className="text-left" htmlFor="email">
            Email
          </label>
          <input
            type={"email"}
            id="email"
            name="email"
            className="w-full mt-1 mb-2 bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
            
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
              
              onChange={handleOnChange}
            />
            <span
              className="flex  text-xl cursor-pointer"
              onClick={handleshowPassword}
            >
              {showPassword ? <BiShow /> : <BiHide />}
            </span>
          </div>

          <label className="text-left" htmlFor="cofirmpassword">
            Confirm Password
          </label>
          <div>
            <div className="flex  px-2 py-1 rounded mt-1 mb-2 focus-within:outline focus-within:outline-blue-300 "></div>
            <input
              type={showPassword ? "text" : "Password"}
              id="confirmpassword"
              name="confirmpassword"
              className="w-full mt-1 mb-2 bg-slate-200 px-2 py-1 border-none outline-none "
              value={data.confirmpassword}
              onChange={handleOnChange}
            />
            <span
              className="flex  text-xl cursor-pointer"
              onClick={handleshowPassword}
            >
              {showPassword ? <BiShow /> : <BiHide />}
            </span>
          </div>

          <button type="submit" className=" w-fit px-2 m-auto bg-red-500 hover:bg-red-600 cursor-pointer text-white text-xl font-medium text-center py-2 rounded-full mt-4 ">
            Sign up
          </button>
        </form>
        <p className="text-left text-sm mt-2">
          Already have account ?{" "}
          <Link to={"/login"} className="text-red-500 underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
