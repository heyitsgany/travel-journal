import React from "react";

import Navbar from "./components/Navbar";
import Card from "./components/Card";

import data from "./data";

export default function App() {
  const journalEntries = data.map(function (entry) {
    return <Card entry={entry} />;
  });

  return (
    <>
      <Navbar />
      <div className="entries">{journalEntries}</div>
    </>
  );
}
