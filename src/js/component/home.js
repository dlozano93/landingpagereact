import React from "react";
import { Navbar } from "./navbar";
import { Card } from "./Card";
import { Jumbo } from "./jumbotron";
import { Footer } from "./footer";

//include images into your bundl

//create your first component
export function Home() {
	return (
		<>
			<Navbar />

			<div className="container my-5">
				<Jumbo />
			</div>
			<div className="container my-5">
				<div className="container w-80 d-flex justify-content-around mb-5">
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
				<div className="container w-80 d-flex justify-content-around mb-5">
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
				<div className="container w-80 d-flex justify-content-around mb-5">
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
				<div className="container w-80 d-flex justify-content-around mb-5">
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
				<div className="container w-80 d-flex justify-content-around my-5">
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>

			<div className="container-fluid my-5 py-5">
				<Footer />
			</div>
		</>
	);
}
