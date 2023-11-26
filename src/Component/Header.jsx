import React, { useState } from "react";
import { BsCart4 } from "react-icons/bs";
import { LiaUserSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutRedux } from "../redux/userSlice";
import { toast } from "react-hot-toast";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const userData = useSelector((state) => state.user);
  console.log(userData);
  const dispatch = useDispatch();

  const handleShowMenu = () => {
    setShowMenu((preve) => !preve);
  };

  const handleLogout = () => {
    dispatch(logoutRedux());
    toast("Logout successfully");
  };

 const cartItemNumber = useSelector((state)=> state.product.cartItem)
  return (
    <header className="fixed top-0 shadow-md w-full h-16 px-2 md:px-4 z-50 bg-white  ">
      {/* desktop */}
      <div className="flex items-center h-full justify-between px-10">
        <Link to={""}>
          <div className="h-10">
            <img
              src="https://res.cloudinary.com/dyjo2mvqb/image/upload/v1699803247/Shophere_1_llepqa.png"
              alt="logo"
              className="h-full"
            />
          </div>
        </Link>

        <div className="flex items-center gap-4 md:gap-7 ">
          <nav className="  gap-4 md:gap-6 text-base md:text-lg hidden md:flex ">
            {userData.email}
            <Link to={""}>Home</Link>
            <Link to={"menu"}>Menu</Link>
            <Link to={"about"}>About</Link>
            <Link to={"contact"}>Contact</Link>
          </nav>
          <div className="text-2xl text-slate-600 relative">
            <Link to={"cart"}><BsCart4 />
            <div className="absolute -top-1 -right-1 text-white bg-red-500 h-4 w-4 rounded-full m-0 p-0 text-sm text-center">
              {cartItemNumber.length}
            </div>
            </Link>
          </div>
          <div
            className=" text-slate-600 relative flex items-center "
            onClick={handleShowMenu}
          >
            <div className=" text-3xl cursor-pointer w-8 h-8 rounded-full overflow-hidden drop-shadow-md ">
              {userData.image ? (
                <img src={userData.image} className="h-full w-full" />
              ) : (
                <LiaUserSolid />
              )}
            </div>{" "}
            {showMenu && (
              <div className="absolute top-12 right-2 h-full text-black w-fit bg-white py-2 flex flex-col min-w-[120px] text-center ">
                {userData && (
                  <Link
                    to={"newproduct"}
                    className="z-50 whitespace-nowrap cursor-pointer px-2"
                  >
                    New Product
                  </Link>
                )}

                {userData?.email ? (
                  <p
                    className="cursor-pointer text-white px-2 bg-red-500 "
                    onClick={handleLogout}
                  >
                    Logout ({userData.firstName})
                  </p>
                ) : (
                  <Link
                    to={"login"}
                    className="whitespace-nowrap  text-black z-40 cursor-pointer px-2"
                  >
                    Login
                  </Link>
                )}
                <nav className=" top-10 z-30 text-base md:text-lg flex flex-col ">
                  <Link to={""} className="px-2 py-1">
                    Home
                  </Link>
                  <Link to={"menu"} className="px-2 py-1">
                    Menu
                  </Link>
                  <Link to={"about"} className="px-2 py-1">
                    About
                  </Link>
                  <Link to={"contact"} className="px-2 py-1">
                    Contact
                  </Link>

                </nav>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* mobile */}
    </header>
  );
};

export default Header;
