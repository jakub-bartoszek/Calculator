import {
	CurrentCalculation,
	PreviousCalculation,
	Wrapper
} from "./styled";

export const Display = () => (
	<Wrapper>
		<PreviousCalculation>240</PreviousCalculation> {/* just to demo the displayed numbers */}
		<CurrentCalculation>15+12</CurrentCalculation>
	</Wrapper>
);
