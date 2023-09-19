import { useState } from "react";

export const useCalculation = () => {
	const [calculation, setCalculation] = useState({
		firstNumber: "",
		operator: null,
		secondNumber: ""
	});

	const insertNumber = (number) => {
		if (calculation.operator === null) {
			setCalculation({
				firstNumber: calculation.firstNumber + number,
				operator: null,
				secondNumber: null
			});
		}
	};
	return { calculation, insertNumber };
};
