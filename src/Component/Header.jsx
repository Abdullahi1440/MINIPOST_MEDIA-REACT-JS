import React from 'react'
import { useContext } from 'react';
import { Usercontext } from '../App';

 const Header = ({setuser}) => {
  //create context
  const mycontextvalue=useContext(Usercontext);

  return (
    <div className='btn'>
      <span className='text-xl text-success'>Welcome {mycontextvalue} </span>
      <button onClick={()=>setuser("")} className='btn btn-primary'>Logout</button>
    </div>
  )
}
export default Header;