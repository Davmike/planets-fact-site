import { useState } from "react";
import Planet from "./Planet";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/:planet" element={<Planet />}></Route>
      </Routes>
    </>
  );
}

export default App;
