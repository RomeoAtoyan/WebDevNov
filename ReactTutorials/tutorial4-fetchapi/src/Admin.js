import { useEffect, useState } from "react"

export default function Admin(){
    const [user,setUser] = useState("")

    useEffect(()=>{
        let username = JSON.parse(localStorage.getItem('user')).email
        setUser(username)
    })
    return(
        <>
        <h1>{user}</h1>
        </>
    )
}