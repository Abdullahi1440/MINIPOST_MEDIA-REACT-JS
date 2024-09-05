import React from 'react'
import { useContext } from 'react';
import { Usercontext } from '../App';

 const Header = ({setuser}) => {
  //create context
  const mycontextvalue=useContext(Usercontext);

  return (
    <div>
      <span>Welcome {mycontextvalue} </span>
      <button onClick={()=>setuser("")}>Logout</button>
    </div>
  )
}
export default Header;