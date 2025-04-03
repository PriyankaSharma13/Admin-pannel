// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import "./App.css";
import Sidebar from "./component/Sidebar";
import Dashboard from "./component/Content";
import TableSection from "./component/TableSection";
import ChartContent from "./component/ChartContent";


const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <Router>
     <Header toggleSidebar={toggleSidebar} />
      <Sidebar isSidebarOpen={isSidebarOpen} />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/tableSection" element={<TableSection />} />
        <Route path="/chartSection" element={<ChartContent />} />
  

        
      </Routes>
    </Router>
  );
};

export default App;
