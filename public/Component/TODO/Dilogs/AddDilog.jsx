"use client";
import { SaveData } from "@/lib/Slices/Data/Dataslice";
import { Dialog, DialogContent } from "@mui/material";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";

const AddDilog = ({open  , onclose}) => {
  const ref = useRef();
  const dispatch = useDispatch();
  const [data, setData] = useState({
    todoname: "",
    todo: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(ref.current);
    const data = {
      todoname: formData.get("TodoTitle"),
      todo: formData.get("Todo")
    };
    dispatch(SaveData({Data : data}));
    ref.current.reset();
  };

  return (
    <>
      <Dialog open={open}>
        <DialogContent>
          <form onSubmit={handleSubmit} className="flex flex-col gap-2" ref={ref}>
            <div>
              <label htmlFor="TodoTitle">Todo title : </label>
              <input type="text" name="TodoTitle" className="border" />
            </div>
            <div>
              <label htmlFor="Todo">todo : </label>
              <textarea name="Todo" id="Todo" className="border" />
            </div>
            <button type="submit" className="border w-fit p-2">save</button>
            <button onClick={onclose}>close</button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddDilog;