import Create from './components/create';
import Read from './components/read';
import Update from './components/update';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
function App() {
  return (
    // <Create />
    <Router>
      <div className="main">
        <h1 className="main-header text-red-400 font-mono text-center">React Crud Operations</h1>
        <div>
          <Routes>
            <Route path="/create" element={<Create />} />
            {/* <Create /> */}
            <Route path="/read" element={<Read />} />
            <Route path="/update" element={<Update />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
