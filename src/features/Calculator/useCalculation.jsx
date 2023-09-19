import { useEffect, useState } from "react";

export const useCalculation = () => {
	const [calculation, setCalculation] = useState({
		firstNumber: "",
		operator: "",
		secondNumber: ""
	});

	const [result, setResult] = useState(null);

	const setOperatorSign = () => {
		switch (calculation.operator) {
			case "+":
				return "+";
			case "-":
				return "-";
			case "×":
				return "*";
			case ":":
				return "/";
			default:
				return "";
		}
	};

	const insertNumber = (number) => {
		if (calculation.operator === "") {
			setCalculation({
				firstNumber: calculation.firstNumber + number,
				operator: calculation.operator,
				secondNumber: calculation.secondNumber
			});
			setResult(calculation.firstNumber + number);
		} else {
			setCalculation({
				firstNumber: calculation.firstNumber,
				operator: calculation.operator,
				secondNumber: calculation.secondNumber + number
			});

			setResult(
				eval(
					`${calculation.firstNumber}${setOperatorSign()}${
						calculation.secondNumber + number
					}`
				)
			);
		}
	};

	const insertOperator = (operator) => {
		if (calculation.secondNumber === "") {
			setCalculation({
				firstNumber: calculation.firstNumber,
				operator: operator,
				secondNumber: calculation.secondNumber
			});
		}
	};
	return { calculation, insertNumber, insertOperator, result };
};
