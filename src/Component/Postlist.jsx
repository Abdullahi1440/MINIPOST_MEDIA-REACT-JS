
import React from "react";
import Post from "./Post"; 
// import Post from "./Post";
  const Postlist = ({posts })=> {
   return (<div> 
    {posts.map((posts,index)=>(
      //long way  
  //  <Post key={index} content={posts.content} image={posts.image}/>

     <Post key={index} {...posts}/>
//short way

  )
   
  
  
  )}
  </div>
)
 }
 export default Postlist;
 