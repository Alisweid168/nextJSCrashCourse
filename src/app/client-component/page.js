'use client'
import { useState } from "react"



export default function ClientComponent(){
    const [toggle,setToggle]= useState(false)
    return <h1>This is a client component</h1>
}