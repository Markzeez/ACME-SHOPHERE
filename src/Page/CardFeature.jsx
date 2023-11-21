import React from 'react'

const CardFeature = ({image,name,price,category}) => {
  return (
    <div>
        <div className='h-20'>
            <img src={image} className="h-full" />
        </div>
    </div>
  )
}

export default CardFeature