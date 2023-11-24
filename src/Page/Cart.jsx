import React from "react";
import { useSelector } from "react-redux";
import CartProduct from "../Component/cartProduct";

const Cart = () => {
    const productCartItem = useSelector((state)=>state.product.cartItem)
    console.log(productCartItem)
  return (
    <div className="p-2 md:p-4  ">
      <h2 className="text-lg md:text-2xl font-bold text-slate-600">Your Cart Items</h2>

      <div className="">
        {/* display cart items */}
       <div className="">
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
       <div className=""></div>
      </div>
    </div>
  );
};

export default Cart;
