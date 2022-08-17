import React from "react";

const Alert = () => {
  function close() {
    document.getElementById("test").style.display = "none";
  }

  return (
    <div>
      <div id="test" className="alert">
        <span className="closebtn" onClick={close}>
          &times;
        </span>
        <strong>DENIED !</strong> Cannot Add New Users. Contact your
        administrator to grant permissions.
      </div>
    </div>
  );
};

export default Alert;
