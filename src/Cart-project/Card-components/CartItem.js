import React, { useEffect, useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { incre_quantity, reset_cart, increment, decrement, remove, subtotal } from '../Redux-component/Cartitems';
import { useDispatch } from 'react-redux';


import { useSelector } from 'react-redux'

const CartItem = () => {
    const dispatch = useDispatch();
    const cart_arry = useSelector((state) => state.Cart_item.cartarry)
    const cartquantity = useSelector((state) => state.Cart_item.quantity)




    const handleincrement = (e, index, item) => {

        dispatch(increment(item))

    }
    const handldecrement = (e, index, item) => {
        dispatch(decrement(item))
        // console.log(item,'decre');
    }


    const removehandle = (e, index, item) => {
        dispatch(remove(item))

    }

    const reset_all = (e) => {
        e.preventDefault();
        dispatch(reset_cart())
        // setCleardata(false)
    };


//     const gettotal = () => {
//         let total = 0
//         cart_arry.forEach(cvl => {
//             total += cvl.quantity*cvl.price
//         });
// return total

//     }

const gettotal = ()=>{
return cart_arry.reduce((accu,item)=>
   accu+item.price*item.quantity,0
)

}
    return (<>



        {cart_arry.map((item, index) => {

            return (
                <div className="container cart-container">

                    <div className="row-1">
                        <div className="col-12">


                            <table className='table table-cart'>
                                <tr>
                                    <th>Image</th>
                                    <th>Product</th>
                                    <th>Quantity</th>
                                    <th>price</th>
                                    <th>Total</th>
                                    <th>Remove Item</th>
                                </tr>

                                <tr key={index}>
                                    <td><img className='img_cart' src={item.img} alt="" /></td>
                                    <td>{item.Product}</td>
                                    <td><RemoveIcon onClick={(e) => handldecrement(e, index, item)} style={{ border: "2px solid black" }} />{item.quantity}<AddIcon onClick={(e) => handleincrement(e, index, item)} style={{ border: "2px solid black" }} /></td>

                                    <td>{item.price}</td>

                                    <td>{item.price * item.quantity}</td>
                                    <td><button className='btn btn-danger' onClick={(e) => removehandle(e, index, item)}>remove</button></td>
                                </tr>

                            </table>

                        </div>

                    </div>


                </div>

            )
        })}



        {cart_arry.length > 0 && (<button className='btn btn-danger' onClick={reset_all}>ClearAll
        </button>
        )}


        <h1>Total carts:{gettotal() }</h1>





    </>)





}

export default CartItem