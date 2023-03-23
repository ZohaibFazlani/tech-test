import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const url = "https://randomuser.me/api/";
  const [apiData, setApiData] = useState([]);

  const fetchApiData = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setApiData(data.results));
  };
  useEffect(() => {
    const myInterval = setInterval(() => {
      fetchApiData();
    }, 2000);

    return () => clearInterval(myInterval);
  }, []);

  return (
    <div className="App">
      {apiData.map((item) => (
        <div className="container">
          <div>
            <h3>Email</h3>

            <h3>{item.email}</h3>
          </div>
          <div>
            <h3>Cell</h3>

            <h3>{item.cell}</h3>
          </div>
          <div>
            <h3>Picture</h3>
            {item?.picture && <img src={item?.picture?.medium} />}
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
