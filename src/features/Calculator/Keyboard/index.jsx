import { useState } from "react";
import { Clear, Equals, Operator, Wrapper } from "./styled";
import { Number } from "./styled";

export const Keyboard = ({ insertNumber }) => {
	return (
		<Wrapper>
			<Clear>C</Clear>
			<Operator>()</Operator>
			<Operator>%</Operator>
			<Operator>:</Operator>
			<Number onClick={() => insertNumber(7)}>7</Number>
			<Number onClick={() => insertNumber(8)}>8</Number>
			<Number onClick={() => insertNumber(9)}>9</Number>
			<Operator>×</Operator>
			<Number onClick={() => insertNumber(4)}>4</Number>
			<Number onClick={() => insertNumber(5)}>5</Number>
			<Number onClick={() => insertNumber(6)}>6</Number>
			<Operator>-</Operator>
			<Number onClick={() => insertNumber(1)}>1</Number>
			<Number onClick={() => insertNumber(2)}>2</Number>
			<Number onClick={() => insertNumber(3)}>3</Number>
			<Operator>+</Operator>
			<Number>+/-</Number>
			<Number onClick={() => insertNumber(0)}>0</Number>
			<Number>,</Number>
			<Equals>=</Equals>
		</Wrapper>
	);
};
