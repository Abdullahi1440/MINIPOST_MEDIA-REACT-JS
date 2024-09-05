
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
    const newposts=state.post.filter(post=>post.id !==deletePostId);
    return{posts:newposts}
    }
    default:
        return state;
    }
    

};

