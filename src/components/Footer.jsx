import React from 'react'

const Footer = () => {
  return (
    <div className="mt-5 container mx-auto w-full h-[200px] p-5 bg-violet-600">
      <div className="flex justify-between">
        {/* intro */}
        <div className="w-[400px]">
          <h5 className="text-lg font-semibold flex items-center mb-2"> E-cart</h5>
          <p className="mb-1">
            Designed and built with all the love in the world by the Luminar team
            with the help of our contributors.
          </p>
          <p className="mb-1">Code licensed Luminar, docs CC By 3.0</p>
          <p>Currently v5.3.2</p>
        </div>
        {/* links */}
        <div className="flex flex-col">
          <h5 className="text-lg font-semibold mb-2">Links</h5>
          <a href="/" className="text-black hover:text-gray-300 no-underline mb-1">Landing Page</a>
          <a href="/home" className="text-black hover:text-gray-300 no-underline mb-1">Home Page</a>
          <a href="/history" className="text-black hover:text-gray-300 no-underline">
            History Page
          </a>
        </div>

        {/* guide */}
        <div className="flex flex-col">
          <h5 className="text-lg font-semibold mb-2">Guides</h5>
          <a
            href="https://react.dev/"
            className="text-black hover:text-gray-300 no-underline mb-1"
          >
            React
          </a>
          <a href="#" className="text-black hover:text-gray-300 no-underline mb-1">
            React Bootstrap
          </a>
          <a href="#" className="text-black hover:text-gray-300 no-underline">
            React Router
          </a>
        </div>

        {/* contact */}
        <div className="flex flex-col">
          <h5 className="text-lg font-semibold mb-2">Contact Us</h5>
          <div className="flex items-center mb-3">
            <input
              type="text"
              placeholder="Enter your e-mail..!!!"
              className="form-input rounded-md border border-gray-300 px-4 py-2 mr-2 w-full"
            />
            <button className="bg-black hover:bg-white text-white hover:text-black px-4 py-2 rounded-md">
              <i className="fa-solid fa-arrow-right-long"></i>
            </button>
          </div>
          <div className="flex space-x-7">
            <a href="#" className="text-black hover:text-blue-500 transition transform hover:scale-150 duration-300">
              <i className="fa-brands fa-twitter text-2xl"></i>
            </a>
            <a href="#" className="text-black hover:text-blue-700 transform hover:scale-150 duration-300">
              <i className="fa-brands fa-facebook text-2xl"></i>
            </a>
            <a href="#" className="text-black hover:text-pink-500 transform hover:scale-150 duration-300">
              <i className="fa-brands fa-instagram text-2xl"></i>
            </a>
            <a href="#" className="text-black hover:text-green-500 transform hover:scale-150 duration-300">
              <i className="fa-brands fa-whatsapp text-2xl"></i>
            </a>
            <a href="#" className="text-black hover:text-blue-600 transform hover:scale-150 duration-300">
              <i className="fa-brands fa-linkedin text-2xl"></i>
            </a>
            <a href="#" className="text-black hover:text-gray-700 transform hover:scale-150 duration-300">
              <i className="fa-brands fa-github text-2xl"></i>
            </a>
          </div>
        </div>
      </div>
    </div>


  )
}

export default Footer