
import React, { Component } from 'react'
import avataaaras from "../avataaars.svg"

export default class Home extends Component {
  render() {
    return (
  <div className="item py-5">
    <div className="container text-center">
    <img src={avataaaras}  alt="" />
    <div className="main-heading">
      <h2 className=' text-white'>START FRAMEWORK</h2>
      <div className="line text-white d-flex justify-content-center align-items-center">
        <div className="left-line mx-3"></div>
        <i class="fa-solid fa-star"></i>
        <div className="right-line mx-3"></div>
      </div>
    </div>
    <p className='text-white py-3'>Graphic Artist - Web Designer - Illustrator</p>
  </div>
  </div>
    )
  }
}

