import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { decreamentQuantity, emptyCart, increamentQuantity, removeCartItem } from '../redux/slices/cartSlice'

const Cart = () => {
    const navigate = useNavigate()
    const [cartTotal, setCartTotal] = useState(0)
    const userCart = useSelector(state => state.cartReducer)

    useEffect(() => {
        if(userCart.length>0){
            setCartTotal(userCart?.map(item => item.totalPrice).reduce((a, b) => a + b))
        }
    }, [userCart])

    const dispatch = useDispatch()

    const checkOut = () => {
        dispatch(emptyCart())
        alert("Items checked out successfully")
        navigate('/')
    }

    return (
        <>
            <Header />
            <div style={{ paddingTop: '100px' }} className='px-5  min-h-screen'>
                {

                    userCart.length > 0 ?
                        <>
                            <h1 className='text-5xl font-bold text-blue-600'>Cart Summary..</h1>
                            <div className="grid grid-cols-3 gap-4 mt-5">
                                <div className="col-span-2 border rounded shadow p-5">
                                    <table className='table-auto w-full'>
                                        <thead>
                                            <tr>
                                                <td className='font-semibold'>#</td>
                                                <td className='font-semibold'>Name</td>
                                                <td className='font-semibold'>Image</td>
                                                <td className='font-semibold'>Quantity</td>
                                                <td className='font-semibold'>Price</td>
                                                <td className='font-semibold'>...</td>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                userCart?.map((product, index) =>
                                                    <tr key={product.id}>
                                                        <td>{index + 1}</td>
                                                        <td>{product.title}</td>
                                                        <td><img width={'70px'} height={'70px'} src={product.thumbnail} alt="" /></td>
                                                        <td>
                                                            <div className='flex'>
                                                                <button onClick={()=>dispatch(decreamentQuantity(product))} className='font-bold'>-</button>
                                                                <input style={{ width: '40px' }} className='border rounded p-1 mx-2' type="text" value={product.quantity} />
                                                                <button onClick={() => dispatch(increamentQuantity(product?.id))} className='font-bold'>+</button>
                                                            </div>
                                                        </td>
                                                        <td>${product.totalPrice}</td>
                                                        <td><button onClick={() => dispatch(removeCartItem(product?.id))} className='text-red-500'><i className='fa-solid fa-trash'></i></button></td>
                                                    </tr>
                                                )

                                            }
                                        </tbody>
                                    </table>
                                    <div className='float-right mt-5'>
                                        <button onClick={()=>dispatch(emptyCart())} className='bg-red-600 rounded text-white p-2'>Empty Cart</button>
                                        <Link to={'/'} className='bg-blue-500 ms-3 rounded p-2 text-white'>Shop More</Link>
                                    </div>
                                </div>
                                <div className='col-span-1 '>
                                    <div className='border rounded shadow p-5'>
                                        <h2 className='text-2xl font-bold m-2'>Total Amount: <span className='text-red-600'> ${cartTotal} </span></h2>
                                        <hr />
                                        <button onClick={checkOut} className='bg-green-700 rounded text-white w-full p-2 mt-5'>Check Out</button>
                                    </div>

                                </div>
                            </div>
                        </>
                        :
                        <div className='flex justify-center items-center h-screen'>
                            <img className='h-1/2' src="https://bexcart.com/assets/images/empty-cart.gif" alt="" />
                            <h1 className='text-3xl text-red-600'> Your Cart is empty</h1>
                        </div>
                }

            </div>
        </>
    )
}

export default Cart