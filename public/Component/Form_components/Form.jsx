"use client"

import { SubmitForm } from "@/actions/Submit";
import { useRef } from "react";

const Form_component = () => {
    const ref = useRef()
    return(
        <>
        <form ref={ref} action={(e) => {SubmitForm(e) ; ref.current.reset()}} className="p-3">
            <div className="flex justify-center gap-3 w-full">
            <div>
            <label htmlFor="">Firstname : </label>
            <input type="text" name="Firstname" className="border-b p-2 border-black  focus:outline-none"/>
            </div>

            <div>
            <label htmlFor="">Lastname : </label>
            <input type="text" name="Lastname" className="border-b p-2 border-black  focus:outline-none"/>
            </div>
            </div>

            <div className="flex justify-center gap-3">
            <div>
            <label htmlFor="">email : </label>
            <input type="email" name="email" className="border-b p-2 border-black  focus:outline-none"required/>
            </div>

            <div>
            <label htmlFor="">date : </label>
            <input type="date" name="date" className="border-b p-2 border-black  focus:outline-none"/>
            </div>
            </div>

            <div className="flex justify-center gap-3">
            <div>
            <label htmlFor="">passoword : </label>
            <input type="password" name="passoword" className="border-b p-2 border-black  focus:outline-none"required/>
            </div>

            <div>
            <label htmlFor="">ConfirmPassword : </label>
            <input type="password" name="ConfirmPassword" className="border-b p-2 border-black  focus:outline-none"/>
            </div>
            </div>

            <button type="submit">Submit</button>
        </form>
        </>
    )
}
export default Form_component;