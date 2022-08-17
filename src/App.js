import React from "react";
import Box from "./components/Box";
import data from "./components/data";
import Info from "./components/Info";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import Alert from "./components/Alert";

// Start of Sort

data.sort(function (a, b) {
  const nameA = a.name.toUpperCase(); // ignore upper and lowercase
  const nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0;
});

// End of Sort

const App = () => {
  const [square, setSquare] = React.useState(data);
  const [info, setInfo] = React.useState(data);
  const [alert, setAlert] = React.useState(false);

  function addUser() {
    setAlert((x) => !x);
  }
  function handle(id) {
    // console.log(`You Clicked button ${id}`);
    setInfo((prev) => {
      return prev.map((items) => {
        items.on = false;
        return id === items.id ? { ...items, on: !items.on } : items;
      });
    });
  }
  function handleWfh(props) {
    setInfo((prev) => {
      return prev.map((items) => {
        return props === items.id ? { ...items, wfh: !items.wfh } : items;
      });
    });
    console.log(`WFH Member ${props}`);
  }
  // List of Names Mapped Here
  let mappedData = square.map((item) => (
    <Box key={item.id} data={item} handle={() => handle(item.id)} />
  ));

  // Card / Information Mapped Here
  let mappedInfo = info.map((item) => (
    <Info key={item.id} data={item} handle={() => handle(item.id)} />
  ));

  let passWfhProps = info.map((item) => item.id);

  return (
    <div>
      <Header />

      <div className="mainContainer">
        <div className="listOfNames">{mappedData}</div>
        <div className="info">{mappedInfo}</div>
        <input
          id="wfhBtn"
          type="button"
          onClick={() => handleWfh(passWfhProps)}
          value="Work From Home"
        />
        <input id="wfhBtn2" type="button" value="Request Vaction" />
        <input id="wfhBtn3" type="button" value="Submit Suggestion" />
        <input id="wfhBtn4" type="button" value="Request Sit-Down" />
      </div>
      <button id="btn" onClick={addUser}>
        + Add New User
      </button>
      {alert ? <Alert /> : null}
      <Footer />
    </div>
  );
};

export default App;
