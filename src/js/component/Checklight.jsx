import React, { useState } from "react";

const CheckLight = (props) => {
	const actualClick = [colorSelected, Lightselect, glowSelectd];
	const [activatedLight, SetactivatedLight] = useState("red");
	return (
		<>
			(props.selectedColor=="red"?)
			{
				((claseRed = "Light redOn glowRed"),
				(claseGreen = "Light yellowOff"),
				(claseYellow = "Light greenOff"),
				(
					<Checklight
						claseRed="Light redOn glowRed"
						claseGreen="Light yellowOff"
						claseYellow="Light greenOff"
					/>
				))
				/*actualClick[{claseRed},{claseGreen},{claseYellow}]*/
			}
			if(props.selectedColor=="yellow")
			{
				((claseRed = "Light redOff"),
				(claseGreen = "Light yellowOn glowYellow"),
				(claseYellow = "Light greenOff"),
				(
					<Checklight
						claseRed="Light redOff"
						claseGreen="Light yellowOn glowYellow"
						claseYellow="Light greenOff"
					/>
				))
			}
			if(props.selectedColor=="green")
			{
				((claseRed = "Light redOff"),
				(claseGreen = "Light yellowOff"),
				(claseYellow = "Light greenOn glowGreen"),
				(
					<Checklight
						claseRed="Light redOff"
						claseGreen="Light yellowOff"
						claseYellow="Light greenOn glowGreen"
					/>
				))
			}
		</>
	);
};

export default CheckLight;
