import { useEffect, useState } from "react";

export const useCalculation = () => {
	const [calculation, setCalculation] = useState([]);

	const [displayedCalculation, setDisplayedCalculation] = useState(
		[]
	);
	const [isBeforeNumber, setIsBeforeNumber] = useState(true);
	const [result, setResult] = useState(null);
	const [usedBeforeBracket, setUsedBeforeBracket] = useState(false);

	const calculate = () => {
		setCalculation([result]);
		setDisplayedCalculation([result]);
		console.log(result)
	};

	const insertNumber = (number) => {
		setCalculation((calculation) => [...calculation, number]);
		setDisplayedCalculation((displayedCalculation) => [
			...displayedCalculation,
			number
		]);
		setIsBeforeNumber(true);
	};

	const insertBracket = () => {
		if (usedBeforeBracket === false) {
			setCalculation((calculation) => [...calculation, "("]);
			setDisplayedCalculation((displayedCalculation) => [
				...displayedCalculation,
				"("
			]);
			setUsedBeforeBracket(true);
		} else {
			setCalculation((calculation) => [...calculation, ")"]);
			setDisplayedCalculation((displayedCalculation) => [
				...displayedCalculation,
				")"
			]);
		}
	};

	const insertOperator = (operator) => {
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
		calculate
	};
};
