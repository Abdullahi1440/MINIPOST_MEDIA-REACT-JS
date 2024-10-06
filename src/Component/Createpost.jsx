 import React, { useRef, useState ,useContext } from 'react'
 import { Postcontext } from '../App';
 const Createpost = ({ user}) => {
  const [content ,setcontent]=useState();
  const[image , setimage]=useState(null);

  const imageref=useRef();
   const{dispatch}=useContext(Postcontext);
 
  const handlesubmit=(event)=>{
      event.preventDefault();
      const newpost={content , image ,user , id:Date.now};
    //  setpost([newpost ,...post])
    dispatch({type:"ADD_NEW_POST" ,payload:{post:newpost}});
    setcontent("");
    imageref.current.value="";
  };
  return (
<>
   
      <div className="container">
      <h1 className='text-xl'>Create Post </h1>
      <form className='row' onSubmit={handlesubmit}  >
        <div className='col-6'>
    <input onChange={(event)=>setcontent(event.target.value)} type="text"  className='form-control' placeholder='create post' value={content}  />
    </div>
    <div className="col-6">
    <input  type="file" className='form-control' onChange={(event)=>setimage(event.target.files[0])} ref={imageref} />
    </div>
    <div className="col-md-3">
    <button type="submit" className='btn btn-success mt-3 fs-left'>Submit</button>
    </div>
    </form>
    
    </div>
   
   
    </>
  )
}
export default Createpost;
