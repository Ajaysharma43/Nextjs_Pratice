"use client"
import axios from "axios";
import Image from "next/image";
import { useReducer, useRef, useState } from "react";
import { submitaction } from "@/actions/form";

const About_Body = () => {
  const [count, setCount] = useState(0);
  const ref = useRef()

  const SendData = async() => {
    let data = {
      name : "ajay"
    }
    const response = await axios.post('api/add' , {data : data.name})
    console.log(await response.data);
  }

  return (
    <>
      <button onClick={SendData} >Click</button>

      <form ref={ref} action={(e) => {submitaction(e); ref.current.reset()}} >
      <h1 className="text-2xl font-bold">Which school did you (or do you) attend?</h1>
                <p className="text-sm text-black">You can add more credentials later.</p>

                <input 
                    type="text" 
                    placeholder="Type here" 
                    className="focus:outline-none border-2 border-gray-400 p-[6px] rounded-lg w-[500px]" 
                    required 
                />

                {/* Checkbox Section */}
                <div className="flex items-center gap-3">
                    {/* "I have graduated" Checkbox */}
                    <div className="flex items-center gap-2">
                        <input type="checkbox" id="graduated" className="w-4 h-4 text-blue-400" />
                        <label htmlFor="graduated" className="text-gray-500 cursor-pointer font-medium font-serif">
                            I have graduated
                        </label>
                    </div>

                    {/* "I will graduate in" Checkbox */}
                    <div className="flex items-center gap-2">
                        <input type="checkbox" id="graduateIn" className="w-4 h-4 rounded-none" />
                        <label htmlFor="graduateIn" className="flex items-center gap-2 cursor-pointer">
                            <span className="font-semibold">I will graduate in</span>
                            <input 
                                type="number" 
                                placeholder="2026" 
                                className="focus:outline-none border-2 border-gray-400 p-[3px] rounded-lg w-[70px] text-center" 
                            />
                        </label>
                    </div>
                </div>

                {/* Continue Button */}
                <div className="flex items-center gap-4 pt-5 pb-4">
                    <button className="bg-black text-white px-6 py-1 rounded-lg text-lg font-semibold">
                        Continue
                    </button>
                    <span className="text-gray-500 text-sm">press Enter ↵</span>
                </div>

                {/* Error Message */}
                <p className="border border-red-500 text-red-500 text-sm rounded-lg px-2 py-[3px] inline-block">
                    Required
                </p>
      </form>
    </>
  );
};

export default About_Body;
