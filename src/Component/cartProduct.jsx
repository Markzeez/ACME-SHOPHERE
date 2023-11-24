import React from 'react'

const CartProduct = ({id,name,image,category,qty,total,price  }) => {
  return (
    <div className='bg-slate-200 p-2 flex '>
        <div className=' p-3 bg-white rounded overflow-hidden'>
            <img src={image} className='h-28 w-36 object-cover p-3'  />
        </div>
        <div className='flex flex-col gap-1 '>
<h3 className="font-semibold text-slate-600 text-center capitalize text-2xl md:text-4xl  ">
            {productDisplay.name}
          </h3>
          <p className=" text-slate-500 font-medium text-2xl">{productDisplay.category}</p>
          <p className=" font-bold md:text-2xl">
            <span className="text-blue-500 ">₦</span>
            <span>{productDisplay.price}</span>
          </p>
          <div className='flex gap-3'>
          <button className='bg-yallow-500 py-1 mt-2 rounded hover:bg-yellow-600 min-w-[100px]  '>Buy</button>
          <button onClick={handleAddCartProduct} className='bg-yallow-500 py-1 mt-2 rounded hover:bg-yellow-600  min-w-[100px] '>Add Cart</button>
          </div>
          <div>
            <p className='text-slate-600 font-medium'>Description :</p>
            <p className=''>{productDisplay.description  }</p>
          </div>
</div>
    </div>
  )
}

export default CartProduct