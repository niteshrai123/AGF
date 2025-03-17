import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Page/Home.js";
import PropertyDetails from "./Page/PropertyDetails.js";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "./index.css"; // Ensure global styles are applied

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/property/:id" element={<PropertyDetails />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

const root = document.getElementById("root");

if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("❌ Root element not found!");
}

export default App;
