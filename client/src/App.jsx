import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Admin from "./auth/Admin";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Me from "./components/Me/Me";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login/" exact element={<Login />} />
          <Route path="/register" exact element={<Register />} />
          <Route path="/admin" exact element={<Admin />} />
          <Route path="/me" exact element={<Me />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
