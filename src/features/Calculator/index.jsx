import { Wrapper } from "./styled";
import { Keyboard } from "./Keyboard";
import { Display } from "./Display";
import { useCalculation } from "./useCalculation";

export const Calculator = () => {
	const { calculation, insertNumber } = useCalculation();
	return (
		<Wrapper>
			<Display calculation={calculation} />
			<Keyboard insertNumber={insertNumber} />
		</Wrapper>
	);
};
