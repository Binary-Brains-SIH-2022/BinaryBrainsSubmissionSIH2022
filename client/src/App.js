import "./App.css";
import React, { Component } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Francis from "./components/Francis";
import AddUniversity from "./components/Universities/AddUniversity";
import Error from "./components/Error";
import Navbar from "./components/Navbar";
import ThreeD from "./components/ThreeD.js";
import JsonData from "./data/data.json";
import { FaCommentsDollar } from "react-icons/fa";

const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

const onMarkerClick = () => {
	window.location.href = "/stfrancis";
};
class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			items: [],
			DataisLoaded: false,
		};
	}
	componentDidMount() {
		fetch("http://localhost:5000/record", {
			method: "GET",
		})
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					items: json,
					DataisLoaded: true,
				});
			});
	}
	render() {
		const { DataisLoaded, items } = this.state;
		if (!DataisLoaded)
			return (
				<div>
					<h1> Pleses wait some time.... </h1>{" "}
				</div>
			);
		return (
			<BrowserRouter>
				<div>
					<Navbar />
				</div>
				<div>
					<Navigation />
					<Routes>
						<Route
							path="/"
							element={
								<div className="App" style={{ height: "calc(100vh - 60)" }}>
									{/* <Map
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
            </Map> */}
									<MapContainer center={[22, 78.56242925625513]} zoom={5.2}>
										<TileLayer
											attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
											url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
										/>
										{items.map(
											({ name, lat, long, courses, facilities, fee }) => {
												return(<Marker position={[lat, long]}>
													<Popup>
														<a href="/">{name}</a>
													</Popup>
												</Marker>)
											}
										)}
										{/* <Marker
											position={[28.359033431533113, 75.58802039770784]}
											onMouseOver={() => {
												console.log("hi");
											}}
										>
											<Popup>
												<a href="/">BITS Pilani</a>
											</Popup>
										</Marker>
										<Marker position={[19.243958938381454, 72.85598208225692]}>
											<Popup>
												<a href="/stfrancis/">
													St. Francis Institute Of Technology
												</a>
											</Popup>
										</Marker>
										<Marker position={[12.975034218592768, 79.16435941288997]}>
											<Popup>
												<a href="/">VIT Vellore</a>
											</Popup>
										</Marker> */}
									</MapContainer>
								</div>
							}
							exact={true}
						/>
						<Route path="/stfrancis" element={<Francis />} />
						<Route path="/add" element={<AddUniversity />} />
						<Route path="/3d" element={<ThreeD />} />
						<Route element={<Error />} />
					</Routes>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
