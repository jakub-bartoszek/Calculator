import { Clear, Equals, Operator, Wrapper } from "./styled";
import { Number } from "./styled";

export const Keyboard = ({
	insertNumber,
	insertOperator,
	insertBracket,
	clearAll,
	calculate
}) => {
	return (
		<Wrapper>
			<Clear onClick={() => clearAll()}>C</Clear>
			<Operator onClick={insertBracket}>()</Operator>
			<Operator>%</Operator>
			<Operator onClick={() => insertOperator("/")}>:</Operator>
			<Number onClick={() => insertNumber(7)}>7</Number>
			<Number onClick={() => insertNumber(8)}>8</Number>
			<Number onClick={() => insertNumber(9)}>9</Number>
			<Operator onClick={() => insertOperator("*")}>×</Operator>
			<Number onClick={() => insertNumber(4)}>4</Number>
			<Number onClick={() => insertNumber(5)}>5</Number>
			<Number onClick={() => insertNumber(6)}>6</Number>
			<Operator onClick={() => insertOperator("-")}>-</Operator>
			<Number onClick={() => insertNumber(1)}>1</Number>
			<Number onClick={() => insertNumber(2)}>2</Number>
			<Number onClick={() => insertNumber(3)}>3</Number>
			<Operator onClick={() => insertOperator("+")}>+</Operator>
			<Number>+/-</Number>
			<Number onClick={() => insertNumber(0)}>0</Number>
			<Number onClick={() => insertNumber(".")}>,</Number>
			<Equals onClick={() => calculate()}>=</Equals>
		</Wrapper>
	);
};