import React, { useState } from "react";
import { string } from "prop-types";

import InputBox from "./input.styles";
import validIcon from "../../../assets/images/icons/valid.png";
import errorIcon from  "../../../assets/images/icons/invalid.png";

const Input = ({ status, mesageError, ref, ...props }) => {
	return (
		<InputBox status={status} >
			<input type="text" forwardedRef={ref} {...props} />
        
			{ status === "valid" && <img src={ validIcon } alt="valid"/>}
			{ status === "invalid" && <img src={ errorIcon } alt="error"/>}
			{ status === "invalid" && <span className="text">{ mesageError }</span>}
		</InputBox>
	);
};

// Expected prop values ||
Input.propTypes = {
	status: string,
	mesageError: string,
};

// Default prop values
Input.defaultProps = {
	status: "",
	mesageError: "Field needed",
};


export default Input;