import React from "react";

const Info = (props) => {
  let styles = props.data.vacationDaysRemaining < 10 ? { color: "red" } : null;
  let vactionDays = props.data.vacationDaysRemaining;

  return (
    <div className="infoBox" onClick={props.handle}>
      {props.data.on ? (
        // Info / Card Layout
        <img src={props.data.img} alt={`Profile of ${props.data.name}`} />
      ) : null}

      <h3>{props.data.on ? props.data.name : null}</h3>
      <h4 className="infoPositionText">
        {props.data.on ? props.data.position : null}
      </h4>
      <p className="infoText">{props.data.on && props.data.review}</p>
      <p className="infoText">
        {props.data.on ? `Age: ${props.data.age}` : null}
      </p>
      <div id="flex" className="infoText">
        {props.data.on && ` Vaction Days Remaining:`}
        <p style={styles} className="vacationDays">
          {props.data.on && vactionDays}
        </p>
      </div>
      <p className="infoText">
        {props.data.on && props.data.address + ", # " + props.data.phone}
      </p>
    </div>
  );
};

export default Info;
