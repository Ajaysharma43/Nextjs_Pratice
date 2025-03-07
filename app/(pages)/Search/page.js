"use client"
import { useSearchParams } from "next/navigation"

const Search = () => {
    const search = useSearchParams();
    const data = search.get('name')
    console.log(data);
    return(
        <>
        hello
        {data}
        </>
    )
}

export default Search