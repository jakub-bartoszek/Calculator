import { Clear, Equals, Operator, Wrapper } from "./styled";
import { Number } from "./styled";

export const Keyboard = () => {
	return (
		<Wrapper>
			<Clear>C</Clear>
			<Operator>()</Operator>
			<Operator>%</Operator>
			<Operator>:</Operator>
			<Number>7</Number>
			<Number>8</Number>
			<Number>9</Number>
			<Operator>×</Operator>
			<Number>4</Number>
			<Number>5</Number>
			<Number>6</Number>
			<Operator>-</Operator>
			<Number>1</Number>
			<Number>2</Number>
			<Number>3</Number>
			<Operator>+</Operator>
			<Number>+/-</Number>
			<Number>0</Number>
			<Number>,</Number>
			<Equals>=</Equals>
		</Wrapper>
	);
};
