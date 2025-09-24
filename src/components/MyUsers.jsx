import { useState, useEffect } from "react"

const MyUsers = () => {
    const [users, setUsers] = useState([])
    
    //make an API call to get the users and set that data for a user state Variable
    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(data => setUsers(data))
        console.log('hello')
    }, []) //empty dependency array so that the useEffect does not  re-run

    

  return (
    <>
    <div>MyUsers</div>
    {users?.map((user, idx)=>(
        <p key={idx}>{user.name}</p>
    ))}
    </>
  )
}

export default MyUsers