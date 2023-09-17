import styled from "styled-components";

export const Wrapper = styled.div`
	display: grid;
	grid-template-rows: 1fr 2fr;
	background-color: #00000080;
	height: 124px;
	margin-bottom: 2px;
	padding: 10px;
`;

export const PreviousCalculation = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	font-size: 32px;
	color: #ffffff90;

`;

export const CurrentCalculation = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	font-size: 64px;
	color: #ffffff;
`;
