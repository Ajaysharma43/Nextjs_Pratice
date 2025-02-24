"use client"

import Image from "next/image"
import { useState } from "react"

const About_Body = () => {
    const [count, setCount] = useState(0)
    return (
        <>
            <Image 
                src='https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D' 
                width={100} 
                height={100} 
                quality={50}
                alt="Sample Image"
            />
            <img src='https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D' 
                width={100} 
                height={100} 
                quality={50}
                alt="Sample Image" />
        </>
    )
}

export default About_Body