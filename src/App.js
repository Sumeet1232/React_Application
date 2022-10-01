import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./Components/pages/Home";
import About from './Components/pages/About';
import Contact from './Components/pages/Contact';
import Navbar from './Components/Layout/Navbar';
import { Redirect, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from './Components/pages/NotFound';
import AddUser from './Users/AddUsers';
import EditUser from './Users/EditUser';
import ViewUser from './Users/ViewUser';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="About" element={<About />} />
          <Route path="Home" element={<Home />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="AddUser" element={<AddUser />} />
          <Route path="EditUser/:id" element={<EditUser />} />
          <Route path="ViewUser/:id" element={<ViewUser />} />
          <Route path="*" component={<NotFound />} /> 
        </Routes>
      </div>
    </Router>

  );
}

export default App;
