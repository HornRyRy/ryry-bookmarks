/*global chrome*/
import React from "react";
import { useState, useEffect } from "react";
import HistoryItem from "./HistoryItem";

const dummyHistory = [
  "https://imgur.com/",
  "https://medium.com/",
  "https://www.w3schools.com/",
  "https://rubyonrails.org/",
  "https://www.cnn.com/",
  "https://kotaku.com/",
  "https://developer.chrome.com/docs/devtools/",
  "https://www.youtube.com/",
  "https://excalidraw.com/",
  "https://www.wikipedia.org/",
  "https://www.oed.com/",
];

const [historyUrl, setHistoryUrl] = useState("");

const HistoryList = () => {
  useEffect(() => {
    console.log(dummyHistory);
  }, []);

  const renderHistory = dummyHistory.map((url) => {
    return <HistoryItem url={historyUrl} />;
  });

  return (
    <div>
      <h3>History List</h3>
      {renderHistory}
    </div>
  );
};

export default HistoryList;
