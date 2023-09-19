import { CurrentCalculation, Result, Wrapper } from "./styled";

export const Display = ({ calculation }) => {
	return (
		<Wrapper>
			<Result></Result>
			<CurrentCalculation>{calculation.firstNumber}</CurrentCalculation>
		</Wrapper>
	);
};
