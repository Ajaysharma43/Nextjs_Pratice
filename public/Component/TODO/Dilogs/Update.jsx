"use client";
import { UpdateData } from "@/lib/Slices/Data/Dataslice";
import { Dialog, DialogContent } from "@mui/material";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

const Update = ({ open, Handleclose, Data }) => {
    const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    name: "",
    todo: "",
    id : Data.id
  });

  useEffect(() => {
    if (Data) {
      setFormData({
        name: Data.name,
        todo: Data.todo,
        id : Data.id
      });
    }
  }, [Data]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(UpdateData({formData}))
    console.log("Updated Data:", formData);
    Handleclose();
  };

  return (
    <>
      <Dialog open={open} onClose={Handleclose}>
        <DialogContent>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="font-semibold">Todo Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter todo name"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="todo" className="font-semibold">Todo:</label>
              <textarea
                name="todo"
                value={formData.todo}
                onChange={handleChange}
                className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter todo"
              />
            </div>
            <div className="flex justify-end gap-2 mt-4">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Update
              </button>
              <button
                type="button"
                onClick={Handleclose}
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

export default Update;