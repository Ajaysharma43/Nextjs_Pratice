"use client";

import { useEffect, useState } from "react";
import AddDilog from "./Dilogs/AddDilog";
import Update from "./Dilogs/Update";
import DeleteDialog from "./Dilogs/DeleteDilog";
import { useDispatch, useSelector } from "react-redux";
import { DeleteData, Getdata } from "@/lib/Slices/Data/Dataslice";

const Todo_body = () => {
  const data = useSelector((state) => state.Data.Data) || [];
  const [Updatedata, setupdatedata] = useState({});
  const [Dilog, setdilog] = useState(false);
  const [UpdateDilog, setUpdateDilog] = useState(false);
  const [DeleteDilog, setDeleteDilog] = useState(false);
  const [Deleteid, setdeleteid] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(Getdata());
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [dispatch]);

  const HandleAddDilog = () => {
    setdilog(!Dilog);
  };

  const HandleUpdate = (name, todo, id) => {
    const data = {
      name: name,
      todo: todo,
      id: id,
    };
    setupdatedata(data);
    setUpdateDilog(!UpdateDilog);
  };

  const HandleDelete = (id) => {
    setdeleteid(id);
    setDeleteDilog(true);
  };

  const confirmDelete = () => {
    console.log("called");
    dispatch(DeleteData({ id: Deleteid }));
    setDeleteDilog(false);
  };

  return (
    <>
      <AddDilog open={Dilog} onclose={HandleAddDilog} />
      <Update open={UpdateDilog} Handleclose={() => setUpdateDilog(false)} Data={Updatedata} />
      <DeleteDialog open={DeleteDilog} handleClose={() => setDeleteDilog(false)} confirmDelete={confirmDelete} />
      <div className="container mx-auto p-4">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="py-2 px-4 uppercase">Name</th>
              <th className="py-2 px-4 uppercase">TODO</th>
              <th className="py-2 px-4 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((item) => (
                <tr key={item.id} className="border-b border-gray-300 text-center">
                  <td className="py-2 px-4">{item.name}</td>
                  <td className="py-2 px-4">{item.todo}</td>
                  <td className="py-2 px-4 flex justify-center gap-2">
                    <button
                      onClick={() => HandleDelete(item.id)}
                      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
                    >
                      Delete
                    </button>
                    <button
                      className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-700"
                      onClick={() => HandleUpdate(item.name, item.todo, item.id)}
                    >
                      Update
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3} className="py-4 px-4 text-center">
                  Data not available
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <button
          onClick={HandleAddDilog}
          className="mt-4 bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-700"
        >
          Add
        </button>
      </div>
    </>
  );
};

export default Todo_body;
