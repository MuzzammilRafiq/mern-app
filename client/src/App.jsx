import { createContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Admin from "./auth/Admin";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Me from "./components/Me/Me";
import useFetch from "./hooks/useFetch";

export const UserContext = createContext({});
function App() {
  let meData, meLoading, meError, meRefetch;
  const { data, loading, error, reFetch } = useFetch(
    `http://localhost:3001/user/get`,
    {
      headers: {
        access_token: localStorage.getItem("access_token"),
      },
    }
  );
  if (error) console.log(error);

  return (
    <UserContext.Provider
      value={[
        (meData = data),
        (meLoading = loading),
        (meError = error),
        (meRefetch = reFetch),
      ]}
    >
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
    </UserContext.Provider>
  );
}

export default App;
