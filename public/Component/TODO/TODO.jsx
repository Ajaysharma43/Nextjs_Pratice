"use client";


import { useEffect, useState } from "react";
import AddDilog from "./Dilogs/AddDilog";
import { useDispatch, useSelector } from "react-redux";
import { DeleteData, Getdata } from "@/lib/Slices/Data/Dataslice";


const Todo_body = () => {
  const data = useSelector((state) => state.Data.Data)
  const [Dilog , setdilog] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(Getdata())
        console.log(data);
        
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const HandleAddDilog = () => {
    if(Dilog == true)
    {
        setdilog(false)
        setdilog(false)
    }
    else
    {
        setdilog(true)
    }
  }

  return (
    <>
    <AddDilog open={Dilog} onclose={HandleAddDilog}/>
      <table className="border border-solid m-2 p-2">
        <thead>
          <tr className="border bg-gray-400 p-5">
            <th className="p-2">Name</th>
            <th className="p-2">TODO</th>
            <th className="uppercase p-2">actions</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? data.map((item) => (
            <tr key={item.id} className="border bg-gray-200 text-xl font-thin font-mono uppercase">
              <td>{item.name}</td>
              <td>{item.todo}</td>
              <td><button onClick={() => dispatch(DeleteData({id : item.id}))} className="bg-red-200">Delete</button></td>
            </tr>
          ))
        :
        <h1>Data not avaliable</h1>
        }
        </tbody>
      </table>
      <button onClick={HandleAddDilog}>Add</button>
    </>
  );
};

export default Todo_body;
