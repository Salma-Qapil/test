import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <>
        <div className="footer py-4 text-white">
          <div className="container px-5">
            <div className="row g-3 first-row pt-5 pb-3">
              <div className="col-md-4 text-center">
                <h3>LOCATION</h3>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
              </div>

            <div className="col-md-4 text-center">
<h3>AROUND THE WEB</h3>
<div className=' social pt-3  '>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter my-2"></i>
                <i class="fa-brands fa-linkedin my-2"></i>
                <i class="fa-solid fa-globe"></i>
            </div>

            </div>
            <div className="col-md-4 text-center">
              <h3 className=' third-h3'>ABOUT FREELANCER</h3>
              <p>Freelance is a free to use, licensed Bootstrap <span className='d-flex justify-content-center'>theme created by Route</span> </p>
            </div>
            </div>
            
          </div>
        </div>
        <div className="finel text-white py-3">
          <div className="container">
        <div className="row sec-row">
              <div className="col-md-12">
                <p className='text-center'>
                Copyright © Your Website 2021
                </p>
              </div>
            </div>
        </div>
        </div>
      </>
    )
  }
}
