import React from "react";
import { useSelector } from "react-redux";
import CartProduct from "../Component/cartProduct";
import empty from "../assets/empty.gif"

const Cart = () => {
  
    const productCartItem = useSelector((state)=>state.product.cartItem)
    console.log(productCartItem);

    const totalPrice = productCartItem.reduce((acc,curr)=>acc + parseInt,0)
    const totalQty = productCartItem.reduce((acc,curr)=>acc + + parseInt(curr.qty),0) 
  return (
    <>
    
    <div className="p-2 md:p-4  ">
      <h2 className="text-lg md:text-2xl font-bold text-slate-600">Your Cart Items</h2>
     
      {productCartItem[0] ?

      <div className="my-4 flex gap-3">
        {/* display cart items */}
       <div className="w-full max-w-3xl ">
            {
                productCartItem.map(el=>{
                    return(
                        <CartProduct 
                        key={el.id}
                        id={el.id}
                        name={el.name}
                        image={el.image}
                        category={el.category}
                        qty={el.qty}
                        total={el.total}
                        price={el.price}
                        />
                    )
                })
            }
       </div>
        
      {/* total cart item */}
       <div className="w-fit max-w-md  ml-auto">
        <h2 className="  bg-blue-500 text-white p-2 text-lg">Summary</h2>
       <div className="flex w-full py-2 text-lg border-b">
       <p>Total Qty</p>
       <p className="ml-auto w-32 font-bold">{totalQty}</p>
       </div>
       <div className="flex w-full py-2 text-lg border-b">
        <p>Total Price</p>
        <p className="ml-auto w-32 font-bold"><span className="text-blue-500 ">₦</span>{totalPrice}</p>
       </div>
       <button className="bg-blue-500 w-full font-bold text-lg py-2 text-white">Payment</button>
       </div>
      </div>
  :  
  <>
  <div className="flex w-fulljustify-center items-center flex-col">
    <img src={empty} className="w-full max-w-sm" />
    <p className="text-slate-500 text-3xl font-bold">Empty-Cart</p>
  </div>
  </>
  }
    </div>
      
    </>
  );
};

export default Cart;
