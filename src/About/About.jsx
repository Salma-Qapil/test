import React from 'react'

export default function About() {
  return (
    <>
    <div className="about">
      <div className="container text-center ">
      <div className="main-heading pt-5">
    <h2 className=' text-white'>ABOUT COMPONENT</h2>
    <div className="line text-white d-flex justify-content-center align-items-center">
      <div className="left-line mx-3"></div>
      <i class="fa-solid fa-star"></i>
      <div className="right-line mx-3"></div>
    </div>
  </div>
        <div className="row py-5 text-white d-flex justify-content-center">

          <div className="col-md-5 py-3">
            <p>
            Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, 
            and JavaScript as well as optional SASS stylesheets for easy customization.
            </p>
          </div>
          <div className="col-md-5 py-3">
            <p>
            Freelancer is a free bootstrap theme created by Route. The download includes
            the complete source files including HTML, CSS, and JavaScript as well
          as optional SASS stylesheets for easy customization.
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
