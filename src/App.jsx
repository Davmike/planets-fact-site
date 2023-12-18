import { useState } from "react";
import Planet from "./Planet";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
// import Home from "./Components/Home";

function App() {
  const [hidden, setHidden] = useState(false);

  return (
    <>
      <Header hidden={hidden} setHidden={setHidden} />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/:planet" element={<Planet hidden={hidden} />}></Route>
      </Routes>
    </>
  );
}

export default App;
