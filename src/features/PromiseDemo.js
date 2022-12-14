import React, { useState, useEffect } from "react";

export default function PromiseDemo() {
  const OK = "OK";
  const ERROR = "ERROR";
  const [message, setMessage] = useState("Click the button");

  const getMessageAfter3Secs = (isOK) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (isOK) {
          resolve(OK);
        } else {
          reject(ERROR);
        }
      }, 3000);
    });
  };

  const handleOKClick = (isOK) => {
    getMessageAfter3Secs(isOK)
      .then((msg) => setMessage(msg))
      .catch((errMsg) => setMessage(errMsg));
  };
  return (
    <div>
      PromiseDemo: {message}
      <button
        onClick={() => {
          handleOKClick(true);
        }}
      >
        ok
      </button>
      <button
        onClick={() => {
          handleOKClick(false);
        }}
      >
        err
      </button>
    </div>
  );
}
