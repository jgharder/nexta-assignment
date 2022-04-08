import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import Create from "./pages/create";
import Read from "./pages/read";
import Update from "./components/update";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <div className="main">
        <Routes>
          <Route exact path="/" element={<Read />} />
          <Route exact path="/create" element={<Create />} />
          <Route exact path="/update" element={<Update />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
