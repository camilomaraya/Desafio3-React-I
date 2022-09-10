import Colaboradores from "./components/Main";
import Navbar from "./components/Header";
import { useState } from "react";




function App() {
  const [buscar, setBuscar] = useState("");

  return (
    <div className="App">
        <Navbar setBuscar={setBuscar} />
        <Colaboradores buscar={buscar} />
     
    </div>
  );
}

export default App;
