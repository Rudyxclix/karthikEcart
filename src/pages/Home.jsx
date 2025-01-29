import React, { useEffect } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../redux/slices/productSlice'


const Home = () => {

  const dispatchProducts = useDispatch()
  const { allProducts, loading, errorMsg } = useSelector(state => state.productReducer)
  console.log(allProducts, loading, errorMsg);


  useEffect(() => {
    dispatchProducts(fetchProducts())
  }, [])

  return (
    <>
      <Header insideHome={true} />
      <div style={{ paddingTop: '100px' }} className='container px-4 mx-auto min-h-screen' >
        {
          loading ?
            <div className='flex justify-center items-center my-5 text-3xl'>
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif" alt="" />
              Loading.....
            </div>
            :
            <>
              <div className="grid grid-cols-4 gap-10">
                {
                  allProducts?.length > 0 ?
                    allProducts.map(product => (
                      <div key={product?.id} className="rounded border p-2 shadow" >
                        <img width={'100%'} height={'200px'} src={product.thumbnail} alt="" />
                        <div className='text-center'>
                          <h3 className='text-xl font-bold'>{product.title}</h3>
                          <Link to={`/${product.id}/view`} className='bg-violet-600 rounded p-1 mt-3 text-white inline-block'>View more</Link>
                        </div>
                      </div>
                    ))
                    :
                    <div>
                      No Products
                    </div>
                }
              </div>
            </>
        }
      </div>
    </>
  )
}

export default Home