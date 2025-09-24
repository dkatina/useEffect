import React from 'react'
import { useEffect, useState } from 'react'

const Basics = () => {
    const [count, setCount] = useState(0)
    const [message, setMessage] = useState('')

    //useEffect that runs after every render
    useEffect(()=>{
        console.log("The Component Re-rendered")
    }) //No depedency array means this useEffect will be trigger by every re-render

    // useEffect that runs on mount
    useEffect(() => {
        console.log('Component mounted')
    }, []) //empty dependency array means this useEffect function wil only run once when the component mounts

    //useEffect that fires when our count updates
    useEffect(()=> {
        if (count > 10){
            setMessage('We are over 10!')
        }
    }, [count])// count in the dependency array means that this useEffect will fire any time my count is updated


    //the double && allows you to do a ternary operator with no else condition
  return (
    <>
        <h1>My Count is {count}</h1>
        <button onClick={()=> setCount(count + 1)}>add to count</button>
        {message &&
        <h3>{message}</h3>
        
        }
    </>
  )
}

export default Basics