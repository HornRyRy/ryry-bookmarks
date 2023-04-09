/*global chrome*/
import React from "react";
import { useState, useEffect } from "react";
import HistoryItem from "./HistoryItem";

const dumbdummyHistory = [
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

const dummyHistory = [
  {
    id: 10,
    url: "https://imgur.com/",
    time: 100,
  },
  {
    id: 11,
    url: "https://medium.com/",
    time: 200,
  },
  {
    id: 12,
    url: "https://www.w3schools.com/",
    time: 300,
  },
  {
    id: 13,
    url: "https://rubyonrails.org/",
    time: 400,
  },
  {
    id: 14,
    url: "https://www.cnn.com/",
    time: 500,
  },
  {
    id: 15,
    url: "https://kotaku.com/",
    time: 600,
  },
  {
    id: 16,
    url: "https://developer.chrome.com/docs/devtools/",
    time: 700,
  },
  {
    id: 17,
    url: "https://www.youtube.com/",
    time: 800,
  },
  {
    id: 18,
    url: "https://excalidraw.com/",
    time: 900,
  },
  {
    id: 19,
    url: "https://www.wikipedia.org/",
    time: 1000,
  },
];


const HistoryList = () => {


  useEffect(() => {
    console.log(dummyHistory);
  }, []);

  const renderHistory = dummyHistory.map((hist) => {
    return (
      <HistoryItem
        key={hist.id}
        url={hist.url}

      />
    );
  });

  return (
    <div>
      <h3>History List</h3>
      {renderHistory}
    </div>
  );
};

export default HistoryList;
