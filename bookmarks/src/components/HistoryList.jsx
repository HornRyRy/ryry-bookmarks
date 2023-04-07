/*global chrome*/
import React from "react";
import { useState, useEffect } from "react";



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


]

const HistoryList = () => {
  useEffect(() => {


    console.log(dummyHistory)

  }, []);


  

  return <div>History List</div>;
}

export default HistoryList;
