import React from 'react'
import poert1 from "../poert1.png"
import port2 from "../port2.png"
import port3 from "../port3.png"
export default function Portfolio() {
  return (
    <>
    <div className="port py-2">
  
      <div className="container">
      <div className="main-heading text-center mb-3 ">
    <h2>PORTFOLIO COMPONENT</h2>
    <div className="line text-white d-flex justify-content-center align-items-center">
      <div className="left-line mx-3"></div>
      <i class="fa-solid fa-star star "></i>
      <div className="right-line mx-3"></div>
    </div>
  </div>
        <div className="row g-4 mb-3">

        <div className=" col-md-4 ">
            <div className="port-item">
              <img src={poert1} className='w-100' alt="" />
              <div className="layer">
              <i class="fa-solid fa-plus"></i>
              </div>
            </div>
          </div>
        

          <div className=" col-md-4 ">
            <div className="port-item">
              <img src={port2} className='w-100' alt="" />
              <div className="layer">
              <i class="fa-solid fa-plus"></i>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="port-item">
              <img src={port3} className='w-100' alt="" />
              <div className="layer">
              <i class="fa-solid fa-plus"></i>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="port-item">
              <img src={poert1} className='w-100' alt="" />
              <div className="layer">
              <i class="fa-solid fa-plus"></i>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="port-item">
              <img src={port2} className='w-100' alt="" />
              <div className="layer">
              <i class="fa-solid fa-plus"></i>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="port-item">
              <img src={port3} className='w-100' alt="" />
              <div className="layer">
              <i class="fa-solid fa-plus"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
