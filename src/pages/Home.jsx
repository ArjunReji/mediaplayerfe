import React, { useState } from 'react'
import Add from '../components/Add'
import { Link } from 'react-router-dom'
import View from '../components/View'
import Category from '../components/Category'
import { ToastContainer } from 'react-toastify'

function Home() {

  const [uploadVideoStatus, setUploadVideoStatus] = useState({})

  return (
    <>
      <div className='container d-flex align-items-center mt-5 justify-content-between'>
        <Add setUploadVideoStatus={setUploadVideoStatus}/>
        <Link to={'/watch'} style={{textDecoration:'none'}}>
          <span className='fs-4 textStyle'>Watch History <i class="fa-solid fa-clock ms-2"></i></span>
        </Link>
      </div>

      <div className="container-fluid mt-5 w-100 mb-5">
        <div className='row mt-3'>
          <div className="col-md-9 textStyle">
              <View uploadVideoStatus={uploadVideoStatus}/>
          </div>
          <div className="col-md-3 textStyle">
              <Category/>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        pauseOnHover
        theme="dark"
      />
    </>
  )
}

export default Home