import React from 'react'
import { product_Data } from './Cart-product-data/Apidata'




const Main_cart =()=> {
  return (
   <>
    {product_Data.map((item,index)=>{
        return(

            <div className="container">
        <ul>
        <li>{item.Product}</li>
        <li> {item.price}</li>
        <li>{<img  className='Image_part' src={item.img} alt="" />}</li>
        </ul>

        </div> ) })}

</>  )
}

export default Main_cart