import {
	Bracket,
	Brackets,
	BracketsBox,
	Clear,
	Equals,
	Operator,
	Power,
	Powers,
	PowersBox,
	Wrapper
} from "./styled";
import { Number } from "./styled";

export const Keyboard = ({
	insertNumber,
	insertOperator,
	insertBracket,
	clearAll,
	calculate,
	removeLast
}) => {
	return (
		<Wrapper>
			<Clear onClick={() => removeLast()}>C</Clear>
			<Operator>√</Operator>
			<Powers tabIndex={0}>
				☐²
				<PowersBox>
					<Power
						onClick={() => {
							insertOperator("**2");
						}}
					>
						☐²
					</Power>
					<Power
						onClick={() => {
							insertOperator("**3");
						}}
					>
						☐³
					</Power>
				</PowersBox>
			</Powers>
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
			<Brackets tabIndex={0}>
				&#40;&#41;
				<BracketsBox>
					<Bracket onClick={() => insertBracket("(")}>&#40;</Bracket>
					<Bracket onClick={() => insertBracket(")")}>&#41;</Bracket>
				</BracketsBox>
			</Brackets>
			<Number onClick={() => insertNumber(0)}>0</Number>
			<Number onClick={() => insertNumber(".")}>,</Number>
			<Equals onClick={() => calculate()}>=</Equals>
		</Wrapper>
	);
};
