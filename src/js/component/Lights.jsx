import React from "react";
import  {useState}  from "react";
const [activatedLight, SetactivatedLight] = useState("red");
//create your fir
n
function Lights (props){
	return (
		<>
			{["red", "yellow", "gree"].map((color, idx) => (
				<div
					key={idx}
					style={
						props.activivatedlight === color
							? { ...styles.light, ...styles[`${color}on`] }
							: { ...styles.light, ...styles[`${color}OFF`] }
					}></div>
			))}
			<Lights
				activatedLight={activatedLight}
				SetactivatedLight={SetactivatedLight}
			/>
		</>
	);
};

const styles = {
	light: {
		backgraundColor: "#1b1e1f",
		margin: "10px 0",
		cursor: "pointer",
		borderRadius: "50%",
		height: "80px",
		width: "80px",
	},
	redOn: {
		backgraundColor: "#ff0000",
		boxShadow: "0 0 20px 5px #ff0000",
	},
	redOff: {
		backgraundColor: "#4d0000",
	},
	yellowOn: {
		backgraundColor: "#ffff00",
		boxShadow: "0 0 20px 5px #ff0000",
	},
	yellowOff: {
		backgraundColor: "#4d4d00",
	},
	greendOn: {
		backgraundColor: "#00ff00",
		boxShadow: "0 0 20px 5px #00ff00",
	},
	greenOff: {
		backgraundColor: "#004d00",
	},
};

export default Lights;
