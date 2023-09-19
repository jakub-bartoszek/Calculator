import { CurrentCalculation, Result, Wrapper } from "./styled";

export const Display = ({ displayedCalculation, result }) => {
	return (
		<Wrapper>
			<Result>{result}</Result>
			<CurrentCalculation>{displayedCalculation}</CurrentCalculation>
		</Wrapper>
	);
};
