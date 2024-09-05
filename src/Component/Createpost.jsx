 import React, { useRef, useState ,useContext } from 'react'
 import { Postcontext } from '../App';
 const Createpost = ({ user}) => {
  const [content ,setcontent]=useState();
  const[image , setimage]=useState(null);

  const imageref=useRef();
   const{dispatch}=useContext(Postcontext);
 
  const handlesubmit=(event)=>{
      event.preventDefault();
      const newpost={content , image ,user };
    //  setpost([newpost ,...post])
    dispatch({type:"ADD_NEW_POST" ,payload:{post:newpost}});
    setcontent("");
    imageref.current.value="";
  };
  return (

    
    <div>
      <h1>Create Post </h1>
      <form  onSubmit={handlesubmit}>
    <input onChange={(event)=>setcontent(event.target.value)} type="text" placeholder='create post' value={content}/>
    <input  type="file" onChange={(event)=>setimage(event.target.files[0])} ref={imageref} />
    <button type="submit">Submit</button>

    </form>
    </div>
  )
}
export default Createpost;
