import React, { useState } from 'react'
import { IoCloudUploadOutline } from "react-icons/io5";
import { ImagetoBase64 } from '../Component/utility.jsx/imagetoBase64';
import toast from 'react-hot-toast';


const NewProduct = () => {
  const [data, setData] = useState ({
    name : "",
    category : "",
    image :"",
    price : "",
    description : "",


  })

  const handleOnChange = (e)=>{
    const {name,value} = e.target
    setData((preve)=>{
      return{...preve,
        [name] : value

      }
    })
  }

  const uploadImage = async(e)=>{
      const data = await ImagetoBase64(e.target.file[0])
      // console.log(data)
    setData((preve)=>{
      return{
        ...preve,
        image : data
      }
    })
    
    }


    const handleSubmit =async(e)=>{
      e.preventDefault()
      console.log(data)

      const {name,image,category,price} = data

      if(name && image && category && price){
        const fetchData = await fetch(`${process.env.VITE_APP_SERVER_DOMAIN}/uploadProduct`,{
          method : "POST",
          header : {
            "content-type"  : "application/json"
          },
          body  : JSON.stringify(data)
        })
  
        const fetchRes = await fetchData.json()
  
        console.log(fetchRes)
        toast(fetchRes.message)

        setData(()=>{
          return{
            name : "",
            category  :"",
            image  :"",
            price :"",
            description:"",
          }
        })
      }
      else{
        toast("inter required Fields")
      }
      
    }
  return (
    <div className='p-4'>
      <form className='m-auto w-full max-w-md shadow flex flex-col p-3 bg-white' onSubmit={data}>
        <label htmlFor="name">Name</label>
        <input type={"text"} name='name' className='bg-slate-200 p-1 my-1' onChange={handleOnChange} value={data.name}/>

        <label htmlFor="Category">Category</label>
      <select className='bg-slate-200 p-1 my-1' id='category' name='catogory' onChange={handleOnChange} value={data.category}>
      <option value={"other"}>Select Category</option>
        <option value={"fruit"}>Fruits</option>
        <option value={"vegetable"}>Vegetable</option>
        <option value={"icecream"}>Ice Cream</option>
        <option value={"cookies"}>Cookies</option>
        <option value={"pizza"}>Pizza</option>
        <option value={"rice"}>Rice</option>
        <option value={"cake"}>Cake</option>
        <option value={"burger"}>Burger</option>
        <option value={"sandwish"}>Sandwish</option>

      </select>

      <label htmlFor="image">Image
      <div className='h-40 w-full bg-slate-200 rounded flex items-center justify-center cursor-pointer '>
      {
        data.image ? <img src={data.image} className=' h-full '/> :  <span className='text-5xl'><IoCloudUploadOutline /></span>
      }
     
      
      <input type="file" accept='image/*' id='image' onChange={uploadImage} className='hidden '/>
      </div>
      </label>
       
      <label htmlFor="price"  className='my-1'>Price</label>
      <input type={"text"} name="price" id="" className='bg-slate-200 p-1 my-1' onChange={handleOnChange} value={data.price}/>

      <label htmlFor='description'>Description</label>
      <textarea rows={2} value={data.description} className='bg-slate-200 p-1 my-1 resize-none ' name='description' onChange={handleOnChange}></textarea>
      <button className='bg-red-400 hover:bg-red-600 text-white text-lg font-medium my-2 drop-shadow-md '>Save</button>
      </form>
    </div>
  )
}

export default NewProduct