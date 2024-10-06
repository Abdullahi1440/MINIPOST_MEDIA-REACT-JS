import React from "react";
import { Usercontext } from "../App";
import { useContext } from "react";
import { Postcontext } from "../App";
const Post=({content ,image , user ,id })=>{

  const handledelete=()=>{
    if(!window.confirm("are you sure you want to delete "))
    return
      dispatch({type:"DELETE_POST" , payload:{postId:id}})
  }
    const uservalue=useContext(Usercontext);
  const {dispatch}=useContext(Postcontext);
    let currentuser=uservalue===user;
    return(
        <>
        {/* style={{width:300, height:300 }} alt="" */}
        <div className="card mt-3">
          <card className="body">

        
        <div className="row"> 
          <div className="col-10 text-align-center bg-light shadow-gray ">
          <p className='text-'>{content}</p>
          {image && <img src={URL.createObjectURL(image)} className="img-fluid rounded float-start" alt="" />}
          { user && <p style={{color: currentuser && "green"}} >
          {user}!</p>}
          </div>
          <div className="col-1">
  
          { currentuser && <button className="btn btn-info btn-sinfo-sm mt-2" onClick={handledelete}>delete </button>}

          </div>
        </div>
        </card>
        </div>
        </>


    )
}
export default Post;
