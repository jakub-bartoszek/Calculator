import { CurrentCalculation, Result, Wrapper } from "./styled";

export const Display = ({
	displayedCalculation,
	result,
	calculation
}) => {
	return (
		<Wrapper>
			<Result>{result}</Result>
			<CurrentCalculation variant={calculation.length}>
				{displayedCalculation}
			</CurrentCalculation>
		</Wrapper>
	);
};
