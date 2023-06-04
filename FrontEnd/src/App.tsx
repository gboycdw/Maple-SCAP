import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import InputPage from "./Pages/InputPage/InputPage";
import MainPage from "./Pages/MainPage/MainPage";
import ImageUploadPage from "./Pages/InputPage/ImageUploadPage";

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
