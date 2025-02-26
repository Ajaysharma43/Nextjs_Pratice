"use client";
import { SaveData } from "@/lib/Slices/Data/Dataslice";
import { Dialog, DialogContent } from "@mui/material";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";

const AddDilog = ({ open, onclose }) => {
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
    dispatch(SaveData({ Data: data }));
    ref.current.reset();
    onclose();
  };

  return (
    <>
      <Dialog open={open} onClose={onclose}>
        <DialogContent>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4" ref={ref}>
            <div className="flex flex-col gap-2">
              <label htmlFor="TodoTitle" className="font-semibold">Todo Title:</label>
              <input
                type="text"
                name="TodoTitle"
                className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter todo title"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="Todo" className="font-semibold">Todo:</label>
              <textarea
                name="Todo"
                id="Todo"
                className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter todo"
              />
            </div>
            <div className="flex justify-end gap-2 mt-4">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Save
              </button>
              <button
                type="button"
                onClick={onclose}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700"
              >
                Close
              </button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddDilog;