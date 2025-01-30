import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../redux/slices/productSlice'


const Home = () => {

  const dispatchProducts = useDispatch()
  const { allProducts, loading, errorMsg } = useSelector(state => state.productReducer)
  console.log(allProducts, loading, errorMsg);

  const [currentPage, setCurrentPage] = useState(1)
  const productPerPage = 8
  const totalPages = Math.ceil(allProducts?.length / productPerPage)
  const currentPageProductLastIndex = currentPage * productPerPage
  const currentPageProductFirstIndex = currentPageProductLastIndex - productPerPage
  const visibleAllProducts = allProducts?.slice(currentPageProductFirstIndex, currentPageProductLastIndex)


  useEffect(() => {
    dispatchProducts(fetchProducts())
  }, [])

  const navigateToNextPage = () => {
    if (currentPage != totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const navigateToPreviousPage = () => {
    if (currentPage != 1) {
      setCurrentPage(currentPage - 1)
    }
  }

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
                    visibleAllProducts.map(product => (
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

              <div className='cursor-pointer text-center mt-20 text-2xl'>
                <span onClick={navigateToPreviousPage} className=''><i className='fa-solid fa-backward me-5' /></span>
                <span>{currentPage} of {totalPages}</span>
                <span onClick={navigateToNextPage}><i className='fa-solid fa-forward ms-5'></i></span>
              </div>
            </>
        }
      </div>
    </>
  )
}

export default Home