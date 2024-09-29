import './App.css';

import Navbar from "./components/Navbar";
import FunctionComponent from "./components/FunctionComponent";
import ClassComponent from "./components/ClassComponent";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<FunctionComponent />} />
        <Route path="ClassComponent" element={<ClassComponent />} />
      </Routes>
    </div>
  );
}

export default App;
