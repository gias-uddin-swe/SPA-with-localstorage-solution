import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Sidecard = ({ watchTime }) => {
  const [time, setTime] = useState(0);
  const [breakTime, setBreakTime] = useState(0);

  useEffect(() => {
    const getTime = JSON.parse(localStorage.getItem("watchTime"));
    setTime(getTime);
    // console.log(getTime);
  }, [watchTime]);

  const handleComplete = () => {
    const sum = time - breakTime;
    toast("Wow your total watch time is " + sum);
  };

  return (
    <div>
      <h1>My Cart</h1>

      <div className="mt-5 text-center">
        <p>total watch time</p>
        <input type="text" value={time} disabled />
      </div>
      <h5 className="mt-5">Add Break time</h5>
      <dutton
        onClick={() => {
          setBreakTime(15);
        }}
        className="w-25 btn-circle m-1 btn btn-info"
      >
        15
      </dutton>
      <dutton
        onClick={() => {
          setBreakTime(20);
        }}
        className="w-25 btn-circle bg-warning btn btn-info"
      >
        20
      </dutton>
      <dutton
        onClick={() => {
          setBreakTime(25);
        }}
        className="w-25 btn-circle m-1 bg-danger btn btn-info"
      >
        25
      </dutton>
      <input type="text" value={breakTime} disabled />
      <button onClick={handleComplete} className="mt-5 btn btn-info w-100">
        Complete
      </button>
    </div>
  );
};

export default Sidecard;
