"use client"
import Loading from "@/app/loading"
import Todo_body from "@/public/Component/TODO/TODO"
import { Suspense } from "react"

const TODO = () => {
    return(
        <>
        <Suspense fallback={<Loading/>}>
        <Todo_body/>
        </Suspense>
        </>
    )
}

export default TODO