"use client"

const { useParams, useSearchParams, usePathname } = require("next/navigation")


const Idpage = () => {
    const { id } = useParams()
    console.log(id);

    

    
    const pathname = usePathname()
    
    return(
        <>
        
        {
            id.map((item) => (
                <h1 key={item}>{item}</h1>
            ))
            
        }
        <h1>{pathname}</h1>
        </>
    )
}

export default Idpage