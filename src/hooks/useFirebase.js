import { useEffect } from "react";
import { useState } from "react"

const useFirebase = () => {
const [user, setUser] = useState({})
useEffect(()=>{
},[]);

const signInWithGoogle = () =>{
    console.log("bbb");
}
return [user, setuser]
}

export default useFirebase;