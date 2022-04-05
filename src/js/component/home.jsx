import React, { useState } from "react";
import CheckLight from "./Checklight.jsx";

//include images into your bundle

import rigoImage from "../../img/rigo-baby.jpg";
//create your first component
function Home(props) {
	const [selectedColor, setSelectedColor] = useState("red");
	const [selectedLigh, setSelectedLight] = useState("redOff");
	const [selectLightArround, setselectLightArround] = useState("glowRed");

	const [activatedLight, SetactivatedLight] = useState("red");
	return (
		<>
			<div className="flex-container d-flex justify-content-center">
				<div className="traffic-Light">
					<div
						onClick={() => setSelectedColor("red")}
						className={
							"Light redOn" +
							(selectedColor === "red" ? " glowRed" : " redOff")
						}></div>
					<div
						onClick={() => setSelectedColor("yellow")}
						/*setSelectedLight("yellowOn") &&*/
						className={
							"light yellowOn " +
							(selectedColor === "yellow"
								? " glowYello"
								: " yellowOff")
						}></div>
					<div
						onClick={() => setSelectedColor("green")}
						className={
							"light  greenOn" +
							(selectedColor === "green"
								? " glowGreen"
								: " greenOff")
						}></div>
				</div>
			</div>
		</>
	);
}

export default Home;
