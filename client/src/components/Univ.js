import React, { Component } from "react";
import JsonData from "../data/data.json";
import { FaBook } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";

const link =
	"/" +
	window.location.href.substring(window.location.href.lastIndexOf("/") + 1);

class Header extends Component {
	constructor(props) {
		super(props);

		this.state = {
			items: [],
			DataisLoaded: false,
		};
	}
	componentDidMount() {
		fetch("http://localhost:5000/record" + link, {
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
    console.log(items)
		if (!DataisLoaded) {
			return (
				<div>
					<h1> Pleses wait some time.... </h1>{" "}
				</div>
			);
		}
		return (
			<>
				<header id="header">
					<div className="intro">
						<div className="overlay">
							<div className="container">
								<div className="row">
									<div className="col-md-8 col-md-offset-2 intro-text">
										<h1>
											{items.name}
											<span></span>
										</h1>
										<a href="/3d" className="btn btn-custom btn-lg page-scroll">
											Take 3D Tour
										</a>{" "}
									</div>
								</div>
							</div>
						</div>
					</div>
				</header>

				<div id="about">
					<div className="container">
						<div className="row">
							<h2>About {items.name}</h2>
							<div className="col-xs-12 col-md-12">
								<div className="col-md-4 info">
									<FaBook />
									<div className="service-desc">
										<h3>Courses</h3>
										<p>{items.courses}</p>
									</div>
								</div>

								<div className="col-md-4">
									<FaBuilding />
									<div className="service-desc">
										<h3>Facilities</h3>
										<p>{items.facilities}</p>
									</div>
								</div>

								<div className="col-md-4">
									<FaDollarSign />
									<div className="service-desc">
										<h3>Fee Structure</h3>
										<p>{items.fee}</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default Header;
