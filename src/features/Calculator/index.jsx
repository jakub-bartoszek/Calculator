import { Wrapper } from "./styled";
import { Keyboard } from "./Keyboard";
import { Display } from "./Display";
import { useCalculation } from "./useCalculation";

export const Calculator = () => {
	const { calculation, insertNumber, insertOperator, result } =
		useCalculation();
	return (
		<Wrapper>
			<Display
				calculation={calculation}
				result={result}
			/>
			<Keyboard
				insertNumber={insertNumber}
				insertOperator={insertOperator}
			/>
		</Wrapper>
	);
};
