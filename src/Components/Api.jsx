import axios from "axios";
import React, { useState } from "react";
import './Api.css';
function Api() {
  const [data, setData] = useState(null);

  // Update the state when needed
  const fetchData = () => {
    // Example API call
    setData("Getting Quote...");
    axios
      .get("https://api.quotable.io/quotes/random")
      .then((response) => {
        setData(response.data[0].content);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="container">
      <div className="quote-container">
        {/* Render the data */}
        {data && <p>{data}</p>}
        <button onClick={fetchData}>Get Random Quotes</button>
      </div>
    </div>
  );
}

export default Api;
