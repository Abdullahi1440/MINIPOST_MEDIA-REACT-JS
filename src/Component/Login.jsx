import React, { useState } from 'react'

export const Login = (props) => {
  const [username , setusername]=useState();
  const handleuser=(event)=>{
    event.preventDefault();
    props.setuser(username);
  }
  return (

      <div>
      <>
  
    <form action="" onSubmit={handleuser}>
      <input type="text"placeholder='username'  
      onChange={(event)=>setusername(event.target.value)}
      />
      <button>Login</button>
    </form>
  
    </>
    </div>
  
  )
}
