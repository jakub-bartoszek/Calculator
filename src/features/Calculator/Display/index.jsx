import { CurrentCalculation, Result, Wrapper } from "./styled";

export const Display = ({ calculation, result }) => {
	return (
		<Wrapper>
			<Result>{result}</Result>
			<CurrentCalculation>{Object.values(calculation)}</CurrentCalculation>
		</Wrapper>
	);
};
