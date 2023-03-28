import React from "react";

const Contact = () => {
  return (
    <div className="mt-5">
      <div className="row d-flex align-items-center">
        <div className="col-md-6">
          <h1>Contact with Us</h1>
          <div className="input-box">
            <input
              className="w-75 p-3 m-1"
              type="text"
              placeholder="Type your name "
            />
            <br />
            <input
              className="w-75 p-3 m-1"
              type="email"
              placeholder="Type your email "
            />
            <br />
            <input
              className="w-75 p-5 m-2"
              type="email"
              placeholder="Type your message "
            />
            <br />
            <button class="btn btn-info w-75 p-3 font-weight-bold text-uppercase">
              Send Email
            </button>
          </div>
        </div>
        <div className="col-md-6">
          <div className="w-100">
            <img
              className="w-100"
              src="https://i.ibb.co/M1YLj7g/login.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
