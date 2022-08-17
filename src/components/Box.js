import React from "react";

const Box = (props) => {
  return (
    <div
      id="listOfNames-eachBox"
      // style={styles}
      onClick={props.handle}
      className="listOfNames-eachBox"
    >
      <p className="">{props.data.name}</p>
      <div className="wfh">{props.data.wfh ? `Working From Home` : null}</div>
    </div>
  );
};

export default Box;
