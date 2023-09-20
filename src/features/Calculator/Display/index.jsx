import { CurrentCalculation, Result, Wrapper } from "./styled";

export const Display = ({
	displayedCalculation,
	result,
	calculationLength
}) => {
	return (
		<Wrapper>
			<Result>{result}</Result>
			<CurrentCalculation variant={calculationLength}>
				{displayedCalculation}
			</CurrentCalculation>
		</Wrapper>
	);
};
