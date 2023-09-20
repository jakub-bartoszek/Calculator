import { useEffect, useState } from "react";

export const useCalculation = () => {
	const [calculation, setCalculation] = useState([]);
	const [displayedCalculation, setDisplayedCalculation] = useState(
		[]
	);
	const [isBeforeNumber, setIsBeforeNumber] = useState(true);
	const [result, setResult] = useState(null);
	const [areBracketsEven, setAreBracketsEven] = useState(true);
	const [calculationLength, setCalculationLength] = useState(0);

	useEffect(() => {
		setCalculationLength(displayedCalculation.length);
	}, [displayedCalculation]);

	const calculate = () => {
		setCalculation([result]);
		setDisplayedCalculation([result]);
	};

	const insertNumber = (number) => {
		if (calculationLength < 21) {
			setCalculation((calculation) => [...calculation, number]);
			setDisplayedCalculation((displayedCalculation) => [
				...displayedCalculation,
				number
			]);
			setIsBeforeNumber(true);
		}
	};

	const insertBracket = () => {
		if (calculationLength < 21) {
			if (areBracketsEven === true) {
				setCalculation((calculation) => [...calculation, "("]);
				setDisplayedCalculation((displayedCalculation) => [
					...displayedCalculation,
					"("
				]);
				setAreBracketsEven(false);
			} else {
				setCalculation((calculation) => [...calculation, ")"]);
				setDisplayedCalculation((displayedCalculation) => [
					...displayedCalculation,
					")"
				]);
				setAreBracketsEven(true);
			}
		}
	};

	const insertOperator = (operator) => {
		if (calculationLength < 21) {
			if (isBeforeNumber === true) {
				const setMathSign = () => {
					switch (operator) {
						case "+":
							return "+";
						case "-":
							return "-";
						case "*":
							return "×";
						case "/":
							return ":";
						default:
							return "";
					}
				};

				setCalculation((calculation) => [...calculation, operator]);
				setDisplayedCalculation((displayedCalculation) => [
					...displayedCalculation,
					setMathSign()
				]);
			}
			setIsBeforeNumber(false);
		}
	};

	const clearAll = () => {
		setCalculation([]);
		setDisplayedCalculation([]);
		setResult(null);
	};

	useEffect(() => {
		try {
			setResult(eval(calculation.join("")));
		} catch {
			setResult("");
		}
	}, [calculation]);

	return {
		calculation,
		insertNumber,
		insertOperator,
		result,
		displayedCalculation,
		insertBracket,
		clearAll,
		calculate,
		calculationLength
	};
};
