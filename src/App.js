import "./App.css";
import React, { Component } from "react";
import { Map, Marker,GoogleApiWrapper } from "google-maps-react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Francis from './components/Francis';
import Error from './components/Error';

const onMarkerClick=()=>{
  window.location.href = window.location.href+"stfrancis";
}
const pos={lat:19.243958938381454, lng:72.85598208225692};
class App extends Component {
	render() {
    return(
    <BrowserRouter>
      <div>
        <Navigation />
          <Routes>
            <Route path="/" element={
            <div className="App">
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
                position={pos}
              />
            </Map>
          </div>
            } exact={true}/>
            <Route path="/stfrancis" element={<Francis/>}/>
            {/* <Route path="/contact" component={<Contact/>}/> */}
          <Route component={<Error/>}/>
          </Routes>
      </div> 
    </BrowserRouter>
    );
	}
}
export default GoogleApiWrapper({
	apiKey: "AIzaSyCno2VJ-D__YEeCjej7PfGKihcZfFpl4JM",
})(App);
