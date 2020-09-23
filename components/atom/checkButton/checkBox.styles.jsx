import styled from "styled-components";


// const checkBox = styled.input.attrs("type: checkboxx")``;


export const CheckboxContainer = styled.div`
  position: relative;
  width: 280px;
  height: ${props => (props.size === "small" ? '50px' : '116px')};
`;


export const IconChecked = styled.div `
  position: absolute;
  width: 28px;
  height: 28px;
  
  top: -14px;
  left: 274px;

  border-radius: 50px;
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.white};

  .check__icon2 {
      display: inline-flex;
      align-self: center;
      padding: 6px;
  }
`

export const StyledCheckbox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  
  background:${props => (props.checked === true ? props.theme.blue050 : props.theme.white)};
  box-shadow: 0 0 0 1px ${props => (props.checked === true ? props.theme.blue700 : props.theme.blue100)};
  color: ${props => (props.checked === true ? props.theme.black : props.theme.grey)};

  margin: 12px;
  border-radius: 12px;
  transition: all 150ms;

  font-size: 22px;
  font-weight: 500;

  .check__icon {
	  display: inline-flex;
    align-self: center;
	  margin-right: 18px;
    background:  ${props => (props.checked === true ? props.theme.primary : props.theme.blue050)};
    color: ${props => (props.checked === true ? props.theme.white : props.theme.grey)};
    
    border: 8px solid ${props => (props.checked === true ? props.theme.primary : props.theme.blue050)};
    box-shadow: 1px 0px 1px 0px ${props => (props.checked === true ? props.theme.primary : props.theme.blue050)};
    border-radius: 6px;
  }
`;