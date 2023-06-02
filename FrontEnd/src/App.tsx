import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import InputPage from "./Pages/InputPage";
import MainPage from "./Pages/MainPage";
import ImageUploadPage from "./Pages/ImageUploadPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/input" element={<InputPage />} />
        <Route path="/image" element={<ImageUploadPage />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
