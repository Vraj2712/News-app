// import logo from './logo.svg';
import "./App.css";
import { useState } from "react";
import React from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'




const App = () => {
  // const pageSize = 6;
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);


  // const state ={
  //   progress:10
    
  // }
  
  // setProgress = (progress) =>{
  //   setState({
  //     progress: progress
  //   })
  // }
    return (
      <div>
        <Router>
          <NavBar />
          <LoadingBar
        color='#f11946'
        progress={progress}
        // onLoaderFinished={() => setProgress(0)}
      />


          <Routes>
            <Route
              exact
              path="/"
              element={<News setProgress = {setProgress}  pageSize={6} key="all" country="in" apiKey = {apiKey} category="" />}
            ></Route>
            <Route
              exact
              path="/general"
              element={
                <News setProgress = {setProgress} 
                  pageSize={6}
                  key="general"
                  country="in" apiKey = {apiKey}
                  category="general"
                />
              }
            ></Route>
            <Route
              exact
              path="/business"
              element={
                <News setProgress = {setProgress} 
                  pageSize={6}
                  key="business"
                  country="in" apiKey = {apiKey}
                  category="business"
                />
              }
            ></Route>
            <Route
              exact
              path="/entertainment"
              element={
                <News setProgress = {setProgress} 
                  pageSize={6}
                  key="entertainment"
                  country="in" apiKey = {apiKey}
                  category="entertainment"
                />
              }
            ></Route>
            <Route
              exact
              path="/health"
              element={
                <News setProgress = {setProgress} 
                  pageSize={6}
                  key="health"
                  country="in" apiKey = {apiKey}
                  category="health"
                />
              }
            ></Route>
            <Route
              exact
              path="/science"
              element={
                <News setProgress = {setProgress} 
                  pageSize={6}
                  key="science"
                  country="in" apiKey = {apiKey}
                  category="science"
                />
              }
            ></Route>
            <Route
              exact
              path="/sports"
              element={
                <News setProgress = {setProgress} 
                  pageSize={6}
                  key="sports"
                  country="in" apiKey = {apiKey}
                  category="sports"
                />
              }
            ></Route>
            <Route
              exact
              path="/technology"
              element={
                <News setProgress = {setProgress} 
                  pageSize={6}
                  key="technology"
                  country="in" apiKey = {apiKey}
                  category="technology"
                />
              }
            ></Route>
          </Routes>
        </Router>
      </div>
    );
}

export default App

