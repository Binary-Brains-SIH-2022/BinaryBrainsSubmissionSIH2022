import "./App.css";
import React, { Component } from "react";
import { Map, Marker,GoogleApiWrapper } from "google-maps-react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Francis from './components/Francis';
import Error from './components/Error';
import Navbar from "./components/Navbar";
import ThreeD from "./components/ThreeD.js";
import JsonData from "./data/data.json";

const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

const onMarkerClick=()=>{
  window.location.href = "/stfrancis";
}
class App extends Component {
	render() {
    return(
    <BrowserRouter>
    <div>
      <Navbar />
    </div>
      <div>
        <Navigation />
          <Routes>
            <Route path="/" element={
            <div className="App" style={{"height": "calc(100vh - 60)"}}>
            <Map
              google={this.props.google}
              initialCenter={{
                lat: 22,
                lng: 78.56242925625513,
              }}
              zoom={5.2}
            >
              <Marker
                onClick={onMarkerClick}
                name={"St. Francis Institute of Technology"}
                position={{lat:19.243958938381454, lng:72.85598208225692}}
              />
              <Marker
                onClick={onMarkerClick}
                name={"St. Francis Institute of Technology"}
                position={{lat:28.359033431533113, lng:75.58802039770784}}
              />
              <Marker
                onClick={onMarkerClick}
                name={"St. Francis Institute of Technology"}
                position={{lat:12.975034218592768, lng:79.16435941288997}}
              />
            </Map>
          </div>
            } exact={true}/>
            <Route path="/stfrancis" element={<Francis/>}/>
            <Route path="/3d" element={<ThreeD/>}/>
          <Route element={<Error/>}/>
          </Routes>
      </div> 
    </BrowserRouter>
    );
	}
}

export default GoogleApiWrapper({
	apiKey: API_KEY,
})(App);
