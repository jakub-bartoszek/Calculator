import styled from "styled-components";

export const Wrapper = styled.div`
	display: grid;
	grid-template-rows: 1fr 2fr;
	background-color: #00000080;
	height: 124px;
	margin-bottom: 2px;
	padding: 10px;
`;

export const Result = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	font-size: 32px;
	color: #ffffff90;
`;

export const CurrentCalculation = styled.div`
	overflow: hidden;
	display: flex;
	align-items: flex-end;
	justify-content: flex-end;
	transition: font-size 0.3s;
	font-size: ${(props) => () => {
		if (props.variant > 13) {
			return "43";
		} else if (props.variant > 9) {
			return "48";
		} else {
			return "64";
		}
	}}px;
	color: #ffffff;
`;
