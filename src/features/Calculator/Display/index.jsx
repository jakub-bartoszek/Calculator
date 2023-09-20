import { CurrentCalculation, Result, Wrapper } from "./styled";

export const Display = ({
	displayedCalculation,
	result,
}) => {
	return (
		<Wrapper>
			<Result>{result}</Result>
			<CurrentCalculation variant={displayedCalculation.length}>
				{displayedCalculation}
			</CurrentCalculation>
		</Wrapper>
	);
};
