import React, { useState } from "react";
import { func, node, string } from "prop-types";

import  { CheckboxContainer, StyledCheckbox, IconChecked } from "./checkBox.styles";
import Icons from "../../particles/Icon";


const Checkbox = ({ children, className, size, icon, ...props }) => {
	const [checked, setChecked] = useState(false);

	const handleOnClick = event => {
		event.preventDefault();
		setChecked(!checked);
	}
	
	const Icon = Icons["check"];

	return (
	<CheckboxContainer className={className}  onClick={handleOnClick} {...props}>
	  {checked && <IconChecked {...props}>
	      <span className="check__icon2">
		      <Icon />
		  </span>
	  </IconChecked>}
	  <StyledCheckbox checked={checked} {...props}>
	        {icon && <IconImage name={icon} />}
			{ children }
	  </ StyledCheckbox>
	</CheckboxContainer>
	)
  }



const IconImage = ({ name }) => {
	// If icon name value doesn't match Icons object keys then return null
	if (Icons[name] === undefined) return null;
	// If icon found, return the icon in a span element
	const Icon = Icons[name];
	return (
		<span className="check__icon">
			<Icon />
		</span>
	);
};

// Button Icon component always expects on prop value for icon name
IconImage.propTypes = {
	name: string.isRequired
};


// Expected prop values
Checkbox.propTypes = {
	children: node.isRequired,
	onClick: func,
	icon: string,
};

// Default prop values
Checkbox.defaultProps = {
	children: "Business"
};


export default Checkbox;