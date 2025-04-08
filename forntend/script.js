import React from "react";
import ReactDOM from "react-dom/client"
import Home from "./src/Homes/Home";
import { BrowserRouter, Routes,Route } from "react-router";

import Bubble from "./src/Homes/bubble";

function App(){
    return(
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/:name" element={<Bubble></Bubble>}></Route>
      </Routes>
      </BrowserRouter>
    )
}
const root=ReactDOM.createRoot(document.querySelector(".root"));
root.render(<App></App>);