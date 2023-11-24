import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import HomeCard from "../Component/HomeCard";
import CardFeature from "./CardFeature";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import FilterProduct from "../Component/FilterProduct";
import AllProduct from "../Component/AllProduct";



const Home = () => {
  const productData = useSelector((state) => state.product.productList);
  
  const homeProductCartList = productData.slice(1, 5);
  const homeProductCartListVegetables = productData.filter(el => el.category === "vegetable",[])
  
  

  const loadingArray = new Array(4).fill(null);
  const loadingArrayFeature = new Array(10).fill(null);

  const slideProductRef = useRef()
  const nextProduct = () =>{
slideProductRef.current.scrollLeft += 200
  }
  const preveProduct = () =>{
    slideProductRef.current.scrollLeft -= 200
  }

 

 

 


  return (
    <div className="p-2 md:p-4">
      <div className="md:flex gap-4 py-2 ">
        <div className="md:w-1/2 ">
          <div className="flex gap-2 bg-slate-300 w-36 px-2 items-center rounded-full">
            <p className="text-sm font-medium text-slate-900">Bike Delivery</p>
            <img
              className="h-7 "
              src="https://res.cloudinary.com/dyjo2mvqb/image/upload/v1700565072/2972185_klxl19.png"
              alt=""
            />
          </div>
          <h2 className="text-4xl md:text-7xl  font-bold py-3  ">
            The Fasted Delivery in{" "}
            <span className="text-blue-400 ">Your Home</span>{" "}
          </h2>
          <p className="py-3 text-base max-w-lg ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident.
          </p>
          <button className="font-bold bg-blue-500 text-slate-200 px-4 py-2 rounded-md ">
            Order Now
          </button>
        </div>

        <div className="md:w-1/2 flex flex-wrap gap-3 p-4 justify-center">
          {homeProductCartList[0] ?
            homeProductCartList.map((el) => {
              return (
                <HomeCard
                  key={el._id}
                  image={el.image}
                  name={el.name}
                  price={el.price}
                  category={el.category}
                />
              );
            })
          :
          loadingArray.map((el,index)=>{
            return(
               <HomeCard
               key={index + "loading"}
               loading={"Loading..."}
               />
            )
          })}
        </div>
      </div>
      
    <div>

      <div className="flex w-full items-center">
      <h2 className="font-bold text-2xl text-slate-800 mb-4  ">Fresh Vegetables</h2>
      <div className="ml-auto">
<button onClick={preveProduct} className="bg-slate-300 hover:bg-slate-400 text-lg py-1 rounded-sm"><GrPrevious /></button>
<button onClick={nextProduct} className="bg-slate-300 hover:bg-slate-400 text-lg py-1 rounded-sm"><GrNext /></button>
      </div>
      </div>
        <div className="flex gap-5 overflow-scroll scrollbar-none scroll-smooth transition-all "ref={slideProductRef}>
          {
            homeProductCartListVegetables [0] ? homeProductCartListVegetables.map(el =>{
              return(
                <CardFeature
                key={el._id + "vegetable"}
                id={el._id}
                name={el.name}
                category={el.category}
                price={el.price}
                image={el.image}
                
                
                />
                )
              })
              :
             loadingArrayFeature.map((el,index) => (<CardFeature loading="Loading..." key={index + "cartLoading"}/>) )
            }
            </div>
        </div>

            <AllProduct heading={"Your Product"}/>
 
    </div>
  );
};

export default Home;
