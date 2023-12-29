import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import List from "./pages/List";
import Stepperform from "./pages/Stepperform";
import Product from "./pages/sales/Listproduct";
import Addproduct from "./pages/sales/Addproduct";
function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/List" element={<List />} />
            <Route path="/Stepperform" element={<Stepperform />} />
            <Route path="/Product" element={<Product />} />
            <Route path="/Add-product" element={<Addproduct />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
