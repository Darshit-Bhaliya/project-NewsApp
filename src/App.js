
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import React, { Component } from "react";
import NavBar from "./Component/NavBar";
import News from "./Component/News";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <LoadingBar
        color='#f11946'
        progress={100}
      />
          <NavBar />
          <Routes>
            
            <Route exact path="/" element={<News key="general" pageSize={6} country="us" category="general" /> }/>
            <Route exact path="/business" element={<News key="business" pageSize={6} country="us" category="business" /> }/>
            <Route exact path="/entertainment" element={<News key="entertainment" pageSize={6} country="us" category="entertainment" /> }/>
            <Route exact path="/health" element={<News key="health" pageSize={6} country="us" category="health" /> }/>
            <Route exact path="/science" element={<News key="science" pageSize={6} country="us" category="science" /> }/>
            <Route exact path="/sports" element={<News key="sports" pageSize={6} country="us" category="sports" /> }/>
            <Route exact path="/technology" element={<News key="technology" pageSize={6} country="us" category="technology" /> }/>
            
          </Routes>
        </Router>
      </div>
    );
  }
}