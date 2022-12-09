import React from 'react'
import { product_Data } from '../Cart-product-data/Apidata'
import { useDispatch } from 'react-redux'
import { add_cart } from '../Redux-component/Cartitems'
import { useSelector } from 'react-redux'


const Home = () => {

const dispatch = useDispatch();
    const add_to_cart = (e, index, item) => {

dispatch(add_cart(item))
       
    }
    return (
        <>
            <div className="container-fluid ">

                <div className="row">


                    {product_Data.map((item, index) => {
                        return (


                            <div className="col-md-4   p-2">

                                <div className="row-1"
                                > <h2 className='text-product'>Product :{item.Product}</h2>
                                </div>


                                <div className="row-1">
                                    <h2 className='text-product'> price:{item.price}</h2>

                                </div>


                                <div className="row-1">

                                    <h2 className='img_out' >{<img className='Image_part' src={item.img} alt="" />}</h2>

                                </div>

                               
                                <div className="cart-btn">
                                    <div className="inner-btn">

                                        <button onClick={(e) => add_to_cart(e, index, item)} className='btn btn-warning'>add to cart</button>
                                    </div>
                                </div>



                            </div>

                        )
                    })}
                </div>
            </div>

        </>

    )
}

export default Home