import './App.css';
import Layout from "./Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import All from "./pages/all";
import Color from "./pages/color";
import Label from "./pages/label";
import Power from "./pages/power";
import Prise from "./pages/prise";
import Year from "./pages/year";


export default function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<All />} />
              <Route path="/color" element={<Color />} />
              <Route path="/label" element={<Label />} />
              <Route path="/power" element={<Power />} />
              <Route path="/prise" element={<Prise />} />
              <Route path="/year" element={<Year />} />

            </Route>
          </Routes>
        </div>
      </BrowserRouter>
  );
}


