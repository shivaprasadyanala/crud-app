import { React, useState } from 'react'
// import { useAlert } from 'react-alert';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import axios from 'axios';

const Create = () => {
  // const alert = useAlert()
  const [task, setTask] = useState();
  const Create = () => toast.success('task created',
    {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: "",
    }
  )
  const postdata = () => {
    axios.post(`https://61a710b48395690017be94af.mockapi.io/fake-data`, {
      task
    })
  }
  return (
    <div className="grid justify-items-center">
      <form action="" className="grid w-1/3 justify-items-center mt-40 space-y-4 p-10 bg-blue-300 rounded-md ">
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <label className="text-white" htmlFor="">Note</label>
        <textarea type="text" className="w-96 tracking-wider rounded text-black-500  border-solid border-2 h-20 outline-none focus:ring-2 focus:ring-blue-600" onChange={(e) => (setTask(e.target.value))} />
        <input onClick={() => {
          // alert.show('task added')
          Create();
          postdata();

        }} type="button" value="add" className="text-white bg-blue-500 mt-3 rounded-sm hover:bg-blue-600 cursor-pointer w-28 text-center transition duration-300 ease-in-out transform hover:scale-110" />

      </form>
    </div>)
}

export default Create;