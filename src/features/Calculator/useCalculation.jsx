import { useEffect, useState } from "react";

export const useCalculation = () => {
	const [calculation, setCalculation] = useState([]);
	const [displayedCalculation, setDisplayedCalculation] = useState(
		[]
	);
	const [isBeforeNumber, setIsBeforeNumber] = useState(true);
	const [result, setResult] = useState(null);
	const [usedBeforeBracket, setUsedBeforeBracket] = useState(false);

	const insertNumber = (number) => {
		setCalculation((calculation) => [...calculation, number]);
		setDisplayedCalculation((displayedCalculation) => [
			...displayedCalculation,
			number
		]);
		setIsBeforeNumber(true);
		try {
			setResult(eval([...calculation, number].join("")));
		} catch {
			setResult("Error");
		}
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

	return {
		calculation,
		insertNumber,
		insertOperator,
		result,
		displayedCalculation,
		insertBracket,
		clearAll
	};
};
