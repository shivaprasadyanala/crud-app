import axios from 'axios';
import { react, useEffect, useState } from 'react';
// import { useAlert } from 'react-alert';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
const Read = () => {
  // const alert = useAlert()
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    axios.get(`https://61a710b48395690017be94af.mockapi.io/fake-data`)
      .then((response) => {
        console.log(response);
        setApiData(response.data)
      })
  }, [])
  // apiData.map((data) => {
  //  console.log(data.task);
  // })
  const Delete = () => toast.success('task deleted',
    {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: "",
    }
  )

  const getData = (() => {
    axios.get(`https://61a710b48395690017be94af.mockapi.io/fake-data`)
      .then((response) => {
        setApiData(response.data);
      })
  })
  const deleteData = (id) => {
    axios.delete(`https://61a710b48395690017be94af.mockapi.io/fake-data/${id}`)
      .then(() => {
        getData();
      })
  }
  const setData = (data) => {
    localStorage.setItem('ID', data.id)
    localStorage.setItem('task', data.task)
  }
  return (
    <div className="grid justify-items-center mt-9" >

      <table className="grid justify-items-center bg-yellow-200 rounded-lg p-12">
        <thead>
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
          <tr>
            <th className="w-96 font-mono bg-yellow-400">Note</th>
          </tr>
        </thead>
        <tbody>
          {
            apiData.map((data) => {
              return (
                <tr className="flex place-content-around border-2 bg-gray-500 rounded-md m-4 w-96 min-h-0">
                  <td className="font-mono text-white text-center hover:transform space-x-9 cursor-pointer mt-1">{data.task}</td>

                  <Link to="/update"><td className="font-mono text-white border-2 bg-blue-700 border-blue-800 h-7 rounded-md mx-2"><button onClick={() => setData(data)} className="rounded-md ">update</button></td></Link>

                  <td className="font-mono text-white border-2 bg-blue-300 border-blue-300 h-7 rounded-md mt-1">
                    <button onClick={() => {
                      // alert.show("task deleted")
                      Delete()
                      deleteData(data.id)
                    }
                    }>delete</button></td>

                </tr>
              )
            })}
        </tbody>
      </table>
    </div >
  )
  // return <h1>task</h1>

}

export default Read;