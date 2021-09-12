import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "./App.css"
import Feed from "./Feed";

function App() {
  return (
    <div className="App">
      {/**Header */}
      <Header />
      {/**App Body */}
      <div className="app__body">
        <Sidebar />
        <Feed/>
      </div>
      {/**Siddebar */}

      {/**Feed */}
      {/**Widgets */}
    </div>
  );
}

export default App;
