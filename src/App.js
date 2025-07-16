/**
 * App Component
 * 
 * This is the root component of the TopTidings news application.
 * It sets up routing using React Router and renders the Navbar, 
 * News components, and a top-loading progress bar for loading states.
 */


import './App.css';
import LoadingBar from "react-top-loading-bar";
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  HashRouter
} from "react-router-dom";


const App = () => {
  // State for controlling the top loading progress bar
  const [progress, setProgress] = useState(0)
  // Number of news articles per page
  const pageSize = 12;
  // NewsAPI key 
  const apiKey = process.env.REACT_APP_NEWS_API


  return (
    <div>
      {/*Router */}
      <HashRouter>
        {/*Navbar component */}
        <Navbar />
        {/* Loading Bar */}
        <LoadingBar
          height={3}
          color="#185CA5"
          progress={progress}

        />
        {/*  Passing Props to news component */}
        <Switch>
          <Route exact path="/" ><News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="us" category="general" /></Route>
          <Route exact path="/home" ><News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="us" category="general" /></Route>
          <Route exact path="/entertainment" ><News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="us" category="entertainment" /></Route>
          <Route exact path="/business" ><News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="us" category="business" /></Route>
          <Route exact path="/sports" ><News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="us" category="sports" /></Route>
          <Route exact path="/science" ><News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="us" category="science" /></Route>
          <Route exact path="/technology" ><News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="us" category="technology" /></Route>
          <Route exact path="/health" ><News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="us" category="health" /></Route>
        </Switch>
      </HashRouter>
    </div>
  )
}

export default App