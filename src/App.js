import React, { useState, useEffect } from "react";
import NewsDisplay from "./NewsDisplay";
import "./App.css";

const url =
  "http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e4922320902e4ac693248a71181af89b";

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetch(url);
      const result = await resp.json();
      setData(result);
      console.log(data);
    };

    fetchData();
  }, []);

  if (data) {
    return (
      <div className="App">
        <h1>Welcome News App</h1>

        {data.articles.map((news) => (
          <NewsDisplay key={news.url} news={news} />
        ))}
      </div>
    );
  } else {
    return (
      <div className="App">
        <h1>Sorry no data received</h1>
      </div>
    );
  }
}

export default App;
