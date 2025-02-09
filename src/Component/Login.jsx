import React, { useState } from 'react'

export const Login = ({setuser}) => {
  const [username , setusername]=useState();
  const handleuser=(event)=>{
    event.preventDefault();
    setuser(username);
  }
  return (

      <div className='d-flex justify-content-center' >
      <>
      <div className='card w-50 h-200'>
  <div className='card-body   '>
    <h3 className='card-title text-uppercase '>Login from </h3>
    <form action="" onSubmit={handleuser} className='form-group'>
      <input type="text"placeholder='username'  className='form-control'
      onChange={(event)=>setusername(event.target.value)}
      />
      <button className='btn btn-success mt-3 btn-outline'>Login</button>
    </form>
    </div>
    </div>
    </>
    </div>
  
  )
}
