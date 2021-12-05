import Create from './components/create';
import Read from './components/read';
import Update from './components/update';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import { transitions, positions, Provider as AlertProvider } from 'react-alert';
// import AlertTemplate from 'react-alert-template-basic';


function App() {
  return (
    // <Create />
    <Router>
      <div className="main bg-gray-600 h-screen">
        <h1 className="main-header text-4xl mb-5 text-white font-mono text-center">Take your notes</h1>
        <div className="grid justify-items-center">
          <nav className="bg-gray-400 text-white w-96 p-3 rounded-md ">
            <ul className="flex flex-row place-content-around ">
              <li className="transition duration-300 ease-in-out transform hover:scale-110">
                <Link to="/">Home</Link>
              </li>
              <li className="transition duration-300 ease-in-out transform hover:scale-110">
                <Link to="/create">create tasks</Link>
              </li>
              <li className="transition duration-300 ease-in-out transform hover:scale-110">
                <Link to="/read">read tasks</Link>
              </li>

            </ul>
          </nav>

        </div>
        <div>
          {/* <AlertProvider template={AlertTemplate}> */}
          <Routes>

            <Route path="/create" element={<Create />} />


            <Route path="/read" element={<Read />} />
            <Route path="/update" element={<Update />} />
          </Routes>
          {/* </AlertProvider> */}
        </div>
      </div>
    </Router>
  );
}

export default App;
