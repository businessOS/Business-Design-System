import styled, { css } from "styled-components";

export const InputBox = styled.div`
    position: relative;

	width:  ${props => props.width || '300px'};
	height: 38px;
    margin: 15px auto;
    font-size: 17px;
    color: ${props => props.theme.title};

	input {
		width:  ${props => props.width || '300px'};
		
	    height: 38px;
	    padding: 0 6px;
		padding-right: 64px;
		border-radius: 6px;
		border: none;
		font-size: 17px;
		outline: none;
	    
		background: ${props => props.theme.blue900};
		color: ${props => props.theme.black};

		&::placeholder{ 
            color: ${props => props.theme.grey};
			font-size: 17px;
		}

        &:focus{ 
			background: ${props => props.theme.white};
			border: 1px solid  ${props => props.theme.primary};
		}

		${props => props.status  && css`
		    border: 1px solid  ${props => props.status === 'invalid' ? props.theme.error : props.theme.blue900};
		`}

	}

    img  {
	    position: absolute;
		top:  50%;
		right: 14px;

		width: 22px;
		height: 22px;
		transform: translateY(-50%);
	}

	.text {
	    display: block;
		color: ${props => props.theme.error};
		padding: 6px;
	}
`;

export default InputBox;