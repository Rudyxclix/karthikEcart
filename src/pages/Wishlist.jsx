import React from 'react'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem } from '../redux/slices/wishListSlice'
import { addToCart } from '../redux/slices/cartSlice'

const Wishlist = () => {
  const dispatch = useDispatch()
  const userCart = useSelector(state => state.cartReducer)
  const userWishList = useSelector(state => state.wishListReducer)

  const handleCart = () => {
    dispatch(addToCart(userWishList))
    const existingProduct = userCart.find(item => item.id == userWishList.id)
    if (existingProduct) {
      alert('Product Quantity Increamented')
    }
    else {
      alert('Product Added To Cart')
    }
  }

  return (
    <>
      <Header />
      <div style={{ paddingTop: '100px' }} className='px-5'>
        {
          userWishList?.length > 0 ?
            <>
              <h1 className='tetx-4xl font-bold text-red-600 '>My Wishlist</h1>
              <div className="grid grid-cols-4 gap-4">
                {
                  userWishList?.map(item => (
                    <div className="rounded border p-2 shadow">
                      <img width={'100%'} height={'200px'} src={item.thumbnail} alt="" />
                      <div className='text-center'>
                        <h3 className='text-xl font-bold'>{item.title}</h3>
                        <div className='flex justify-evenly mt-3'>
                          <button onClick={() => dispatch(removeItem(item.id))} className='text-xl'><i className='fa-solid fa-heart-circle-xmark text-red-600'></i></button>
                          <button onClick={handleCart} className='text-xl'><i className='fa-solid fa-cart-plus  text-green-600'></i></button>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
            </>
            :
            <div className='flex justify-center items-center h-screen'>
              <img className='' src="https://cdn.vectopus.com/getillustrations/illustrations/1A5C56BF8400/D24B083C6348/icons-shopping-empty-basket-teamwork-playful-together-groceries-list-wishlist-shop-x-512.png" alt="" />
              <h1 className='text-3xl text-red-600 mt-20'>You wishlist is empty</h1>
            </div>
        }
      </div>
    </>
  )
}

export default Wishlist