import "./App.css";
import { Home, Welcome, Login } from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/welcome" element={<Welcome />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
