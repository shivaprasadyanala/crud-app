import { React, useState, useEffect } from 'react'
import axios from 'axios';

const Update = () => {
 const [id, setId] = useState();
 const [task, setTask] = useState();
 useEffect(() => {
  setId(localStorage.getItem('ID'));
  setTask(localStorage.getItem('task'));
 }, [])
 const updateApiData = () => {
  console.log("hi");
  axios.put(`https://61a710b48395690017be94af.mockapi.io/fake-data/${id}`, {
   task
  })
 }
 return (
  <>
   <form action="" className="grid w-1/3 justify-items-stretch ml-96 mt-40 space-y-4 p-10 bg-gray-300 rounded-md">
    <label htmlFor="">Note</label>
    <textarea value={task} type="text" className="rounded text-pink-500 border-solid border-2 h-20 outline-none focus:ring-2 focus:ring-blue-600" onChange={(e) => (setTask(e.target.value))} />
    <input onClick={updateApiData} type="button" value="add" className="bg-green-500 mt-3 rounded-sm hover:bg-green-600 cursor-pointer w-28 text-center" />

   </form>
  </>)
}

export default Update;