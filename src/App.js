import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Headers from "./components/Headers";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import CartDetail from "./components/CartDetail";

function App() {
  return (
    <>
      <Headers />
      <Routes>
          <Route index element={<Home />} />
          <Route path="/cart" element={<CartDetail />} />
      </Routes>
    </>
  );
}

export default App;
