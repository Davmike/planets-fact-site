import { useState } from "react";
import Planet from "./Planet";
import planets from "../data.json";
import { Link, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <header>
        <nav>
          <ul>
            {planets.map((planet, index) => {
              return (
                <Link key={index} to={`/${planet.name}`}>
                  <li>{planet.name}</li>
                </Link>
              );
            })}
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/:planet" element={<Planet />}></Route>
      </Routes>
    </>
  );
}

export default App;
