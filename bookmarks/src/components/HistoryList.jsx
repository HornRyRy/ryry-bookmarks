/*global chrome*/
import React from "react";
import { useState, useEffect } from "react";

let browserHistory;

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
    // chrome.history.search({ text: "", maxResults: 10 }, (data) => {
    //   console.log(data);
    //   browserHistory=data;
    //   console.log("I'm here")
    // });

    console.log(dummyHistory)

  }, []);

  // useEffect(() => {
  //   chrome.runtime.sendMessage({ action: 'getHistory' }, (results) => {
      
  //     console.log('This is chrome.runtime.sendMessage')
  //   });
  // }, []);
  

  return <div>History List</div>;
}

export default HistoryList;
