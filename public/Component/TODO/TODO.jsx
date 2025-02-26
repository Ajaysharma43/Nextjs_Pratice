"use client";


import { useEffect, useState } from "react";
import AddDilog from "./Dilogs/AddDilog";
import { useDispatch, useSelector } from "react-redux";
import { Getdata } from "@/lib/Slices/Data/Dataslice";


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
    }
    else
    {
        setdilog(true)
    }
  }

  return (
    <>
    <AddDilog open={Dilog} onclose={HandleAddDilog}/>
      <table className="border border-solid m-2">
        <thead>
          <tr>
            <th>Name</th>
            <th>TODO</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.todo}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={HandleAddDilog}>Add</button>
    </>
  );
};

export default Todo_body;
