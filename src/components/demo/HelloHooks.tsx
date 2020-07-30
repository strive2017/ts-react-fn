import React, { useEffect, useState } from 'react'


interface Props {
    name: string
}

const HelloHooks = (props: Props) => {


    const [count, setCount] = useState(0)
    const [text, setText] = useState<string | null>(null)

    useEffect(()=>{
        if(count > 5){
            setText(',你点击的太多了')
        } 
    })
    
    return (
        <>
            <p>你点击了{count}{text}</p>
            <div onClick={()=>{setCount(count+1)}} >hello {props.name}</div>
        </>
    )





}

export default HelloHooks;
