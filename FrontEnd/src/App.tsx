import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import InputPage from "./Pages/InputPage/InputPage";
import MainPage from "./Pages/MainPage/MainPage";
import ImageUploadPage from "./Pages/InputPage/ImageUploadPage";
import ResultPage from "./Pages/ResultPage/ResultPage";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/input" element={<InputPage />} />
          <Route path="/result" element={<ResultPage />} />
          <Route path="/image" element={<ImageUploadPage />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
