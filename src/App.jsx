import { useState } from "react";

import "./App.css";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Sidecard from "./components/Sidecard/Sidecard";
import { ToastContainer, toast } from "react-toastify";
import Header from "./components/Header/Header";
import Contact from "./components/Contact/Contact";

function App() {
  const [watchTime, setWatchTime] = useState("");
  const handleWatchTime = (time) => {
    const previousWatchTime = JSON.parse(localStorage.getItem("watchTime"));
    if (previousWatchTime) {
      const sum = time + previousWatchTime;
      localStorage.setItem("watchTime", sum);
      setWatchTime(sum);
    } else {
      localStorage.setItem("watchTime", time);
      setWatchTime(time);
    }
  };
  return (
    <div>
      <div className="header  m-auto mb-3 ">
        <Header></Header>
      </div>

      <div className=" row">
        <div className="allCards col-md-8 ">
          <Home handleWatchTime={handleWatchTime}></Home>
        </div>
        <div className="side-cart col-md-4 card shadow">
          <Sidecard watchTime={watchTime}></Sidecard>
        </div>
        <ToastContainer />
      </div>
      <Contact></Contact>
    </div>
  );
}

export default App;
