import { Login } from "./Component/Login";
import Header from "./Component/Header";
import Createpost from "./Component/Createpost";
import { useEffect, useState , createContext ,useContext ,useReducer} from "react";
import Postlist from "./Component/Postlist";
import { Usereducerpost } from "./Usereducerpost";
export const Usercontext=createContext();
export const Postcontext=createContext({
    post:[]
})

const App =()=>{
const [user , setuser]=useState("");
// const [post ,setpost]=useState([]);
const Initialpoststate=useContext(Postcontext);
 const[state ,dispatch]= useReducer(Usereducerpost,Initialpoststate)
useEffect(()=>{
    document.title=user?`${user}'s feed`:"PLease login";
},[user])
if(!user){
return <Login setuser={setuser}/>
} 
    return(
        <Postcontext.Provider value={{state ,dispatch}}>
   <Usercontext.Provider value={user}>
<Header user={user} setuser={setuser}/>
<Createpost user={user}/>
<Postlist user={user}  setuser={setuser}posts={state.post}/>

</Usercontext.Provider>
</Postcontext.Provider>
    )
}

export default App;