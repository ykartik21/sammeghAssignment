import "./App.css";
import Login from "./Component/Login";
import Signup from "./Component/Signup";
import { Link, Routes, Route } from "react-router-dom";
import { Account } from "./Component/Account.js";
import Status from "./Component/Status.js";

function App() {
  return (
    <Account>
      <div className="app">
        <nav>
          <Link to="/signup">
            <div className="link">Signup</div>
          </Link>
          <Link to="/login">
            <div className="link">Login</div>
          </Link>
          <Link to="/">
            <div className="link">Home</div>
          </Link>
        </nav>
        <Status />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Account>
  );
}

export default App;
