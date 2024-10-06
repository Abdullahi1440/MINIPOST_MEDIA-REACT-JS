
export const Usereducerpost = (state ,action) => {
    switch(action.type){
        case "ADD_NEW_POST":{
 const newpost=action.payload.post;
        return (
          {post:[newpost ,...state.post]}
         
        ) 

    }
    case"DELETE_POST":{
    let deletePostId=action.payload.postId;
    const newpost=state.post.filter(post=>post.id!==deletePostId);
    return{post:newpost}
    }
    default:
        return state;
    }
    

};

