import styled from "styled-components";

export const Wrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 2px;
`;

export const Button = styled.button`
	font-size: 24px;

	color: white;
	background-color: #00000050;
	border: none;
	width: 100px;
	height: 100px;
	transition: 0.3s;
	&:hover {
		scale: 105%;
		background-color: #00000035;
		box-shadow: 0 0 10px #00000020;
	}
	&:active {
		background-color: #00000020;
	}
`;

export const Number = styled(Button)``;

export const Operator = styled(Button)``;

export const Clear = styled(Button)``;

export const Equals = styled(Button)``;
