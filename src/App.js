import React, { useState, useEffect } from "react";

import { Intro } from "./scenes";
import firebase from "./firebase";

import "./styles.css";

const App = () => {
  const [birthDayTime, setBirthDayTime] = useState(null);
  const [serverTime, setServerTime] = useState(null);
  useEffect(() => {
    firebase
      .database()
      .ref("birthday")
      .on("value", snapshot => setBirthDayTime(snapshot.val()));
    firebase
      .database()
      .ref("/.info/serverTimeOffset")
      .once("value")
      .then(snapshop => setServerTime(snapshop.val() + Date.now()));
  }, []);
  return (
    <main>
      <Intro loading={!birthDayTime || !serverTime} birthDayTime={birthDayTime} />
    </main>
  );
};

export default App;
