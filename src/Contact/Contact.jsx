import React from 'react'

export default function Contact() {
  return (
    <>
    <div className="contact py-3">
      <div className="container ">
      <div className="main-heading text-center pb-5">
    <h2>CONATCT SECTION</h2>
    <div className="line text-white d-flex justify-content-center align-items-center">
      <div className="left-line mx-3"></div>
      <i class="fa-solid fa-star star"></i>
      <div className="right-line mx-3"></div>
    </div>
  </div>

  <form className='py-5 d-flex justify-content-center align-items-center flex-column'>

<input type="text" name="userName" placeholder='userName' className='form-control w-50 pb-0' />
<label className='w-50 name'>  userName :</label> 

<input type="text" name="userAge" placeholder='userAge' className='form-control w-50 ' />
<label className='w-50 '>userAge :</label>


<input type="email" name="userEmail" placeholder="userEmail" className='form-control w-50  ' />
<label className='w-50 '> userEmail :</label>


<input type="password" name="userPassword" placeholder="userPassword" className='form-control w-50' />
<label className='w-50 '>userPassword :</label>

<div className='w-50 text-left'>
<button type="submit" className='mt-4'>Send Message</button>
</div>



  </form>
      </div>
    </div>
    </>
  )
}
