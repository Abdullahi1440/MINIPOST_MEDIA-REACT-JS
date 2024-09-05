import React from "react";
import { Usercontext } from "../App";
import { useContext } from "react";


const Post=({content ,image , user})=>{
    const uservalue=useContext(Usercontext);
    let currentuser=uservalue===user;
    return(
        <>
        <p>{content}</p>
        {image && <img src={URL.createObjectURL(image)} style={{width:400, height:300 }} alt="" />}
      { user && <p style={{color: currentuser && "green"}} >
        {user}!</p>}
        </>
    )
}
export default Post;
