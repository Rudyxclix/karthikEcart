import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToWishList } from '../redux/slices/wishListSlice'
import { addToCart } from '../redux/slices/cartSlice'

const View = () => {
  const dispatch = useDispatch()
  const userCart = useSelector(state => state.cartReducer)
  const userWishList = useSelector(state => state.wishListReducer)

  const [product, setProduct] = useState({})
  const { id } = useParams()
  console.log(id);

  useEffect(() => {
    if (sessionStorage.getItem('allProducts')) {
      const allProducts = JSON.parse(sessionStorage.getItem('allProducts'))
      setProduct(allProducts.find(item => item.id == id));
    }
  }, [])

  const handleWishList = () => {
    const existingProduct = userWishList?.find(item => item.id == id)
    if (existingProduct) {
      alert('Product already exist in wishlist')
    }
    else {
      dispatch(addToWishList(product))
    }
  }

  const handleCart = () => {
    dispatch(addToCart(product))
    const existingProduct = userCart.find(item => item.id == id)
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
      <div className='flex flex-col mx-5'>
        <div className="grid grid-cols-2 items-center h-screen">
          <div>
            <img className='ms-40' width={'350px'} height={'250px'} src={product.thumbnail} alt="" />
            <div className='flex justify-between mt-5'>
              <button onClick={handleWishList} className='bg-blue-600 rounded text-white p-2'>Add to Wishlist</button>
              <button onClick={handleCart} className='bg-green-600 rounded text-white p-2'>Add to Cart</button>
            </div>
          </div>
          <div>
            <h3 className='font-bold'>PID: {product.id}</h3>
            <h3 className='text-5xl font-bold'>{product.title}</h3>
            <h4 className='font-bold text-red-600 text-2xl'>${product.price}</h4>
            <h4>Brand: {product.brand}</h4>
            <h4>Category: {product.category}</h4>
            <p>
              <span className='font-bold'>Description :</span> {product.description}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default View