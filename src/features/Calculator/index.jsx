import { Wrapper } from "./styled";
import { Keyboard } from "./Keyboard";
import { Display } from "./Display";
import { useCalculation } from "./useCalculation";

export const Calculator = () => {
	const {
		insertNumber,
		insertOperator,
		result,
		displayedCalculation,
		insertBracket,
		clearAll,
		calculate
	} = useCalculation();
	return (
		<Wrapper>
			<Display
				displayedCalculation={displayedCalculation}
				result={result}
			/>
			<Keyboard
				clearAll={clearAll}
				insertNumber={insertNumber}
				insertOperator={insertOperator}
				insertBracket={insertBracket}
				calculate={calculate}
			/>
		</Wrapper>
	);
};
