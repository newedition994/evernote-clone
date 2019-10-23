import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const firebase = require("firebase");
require("firebase/firestore");

const API_KEY = process.env.REACT_APP_FIREBASE_API_KEY;
const DOMAIN = process.env.REACT_APP_FIREBASE_AUTH_DOMAIN;
const URL = process.env.REACT_APP_FIREBASE_DATABASE_URL;
const STORAGE = process.env.REACT_APP_FIREBASE_STORAGE_BUCKET;
const MESSAGING = process.env.REACT_APP_FIREBASE_MESSAGING_SENDERID;
const APP_ID = process.env.REACT_APP_FIREBASE_APP_ID;
const MEASUREMENT = process.env.REACT_APP_FIREBASE_MEASUREMENT_ID;

firebase.initializeApp({
  apiKey: API_KEY,
  authDomain: DOMAIN,
  databaseURL: URL,
  projectId: "evernote-clone-1a219",
  storageBucket: STORAGE,
  messagingSenderId: MESSAGING,
  appId: APP_ID,
  measurementId: MEASUREMENT
});

ReactDOM.render(<App />, document.getElementById("evernote-container"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
