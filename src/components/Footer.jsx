import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
      <div className='d-flex justify-content-center align-items-center mt-5 bg-dark'>
        <div className='d-flex align-items-center justify-content-evenly'>
          <div className='overview' style={{ width: '400px' }}>
            <h5>
              <i class="fa-solid fa-video fa-beat text-warning me-3 "></i>
              <span style={{ color: 'white', fontWeight: '200', fontSize: '30px' }}>Media Player</span>
              <p style={{ color: 'white', textAlign: 'justify' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa vel necessitatibus nisi ab quia perspiciatis qui, sequi at, iusto accusamus cum modi quaerat ut tempora. Dolorem debitis vel aspernatur porro.</p>

            </h5>
          </div>
          <div className='links d-flex flex-column ms-3' style={{ color: 'white' }}>
            <h4>Links</h4>
            <Link to={'/'} style={{textDecoration:'none', color:'white' }}>
              Landing Page
            </Link>
            <Link to={'/home'} style={{textDecoration:'none', color:'white' }}>
              Home
            </Link>
            <Link to={'/watch'} style={{textDecoration:'none', color:'white' }}>
              Watch History
            </Link>


          </div>
          <div className='links d-flex flex-column ms-3' style={{ color: 'white' }}>
            <h4>Guides</h4>
            React
            <br />
            React Bootstrap
            <br />
            Font Awesome
          </div>
          <div className="contact_us ms-3" style={{ color: 'white' }}>
            <h4>Contact Us</h4>
            <div className='d-flex'>
              <input type="text" placeholder='Enter Your Email' className='form-control' />
              <button className='btn btn-warning ms-3'>Subscribe</button>
            </div>
            <div className='d-flex justify-content-evenly align-items-center mt-3'>
              <i class="fa-brands fa-instagram fa-2x"></i>
              <i class="fa-brands fa-x-twitter fa-2x"></i>
              <i class="fa-brands fa-youtube fa-2x"></i>
              <i class="fa-brands fa-telegram fa-2x"></i>
            </div>
          </div>

        </div>
      </div>
      <p className='text-center mt-5'>Copy right &#169; 2025 Media Player Built with React</p>
    </div>
  )
}

export default Footer