import React from "react";

//include images into your bundle

//create your first component
export function Navbar() {
	return (
		<nav className="navbar navbar-expand-sm navbar-dark bg-dark d-flex justify-content-around sticky-top">
			<div className="container">
				<div>
					<a className="navbar-brand" href="#">
						Navbar
					</a>
				</div>
				<div>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarNavDropdown"
						aria-controls="navbarNavDropdown"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon" />
					</button>
					<div
						className="collapse navbar-collapse"
						id="navbarNavDropdown">
						<ul className="navbar-nav">
							<li className="nav-item active">
								<a className="nav-link" href="#">
									Home{" "}
									<span className="sr-only">(current)</span>
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Features
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Pricing
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Contact
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
}
