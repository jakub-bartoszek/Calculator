import { useEffect, useState } from "react";

export const useCalculation = () => {
	const [calculation, setCalculation] = useState("");
	const [displayedCalculation, setDisplayedCalculation] =
		useState("");
	const [isBeforeNumber, setIsBeforeNumber] = useState(true);
	const [result, setResult] = useState("");
	const [areBracketsEven, setAreBracketsEven] = useState(true);

	const calculate = () => {
		setIsBeforeNumber(true);
		setCalculation(result);
		setDisplayedCalculation(result);
	};

	const insertNumber = (number) => {
		if (displayedCalculation.length < 16) {
			setCalculation((calculation) => calculation.concat(number));
			setDisplayedCalculation((displayedCalculation) =>
				displayedCalculation.concat(number)
			);
			setIsBeforeNumber(true);
		}
	};

	const insertBracket = () => {
		if (displayedCalculation.length < 16) {
			if (areBracketsEven === true) {
				setCalculation((calculation) => calculation.concat("("));
				setDisplayedCalculation((displayedCalculation) =>
					displayedCalculation.concat("(")
				);
				setAreBracketsEven(false);
			} else {
				setCalculation((calculation) => calculation.concat(")"));
				setDisplayedCalculation((displayedCalculation) =>
					displayedCalculation.concat(")")
				);
				setAreBracketsEven(true);
			}
		}
	};

	const insertOperator = (operator) => {
		if (
			displayedCalculation.length < 16 &&
			(displayedCalculation.length > 0 || operator === "-")
		) {
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
						case "**2":
							return "²";
						default:
							return "";
					}
				};
				setCalculation((calculation) => calculation.concat(operator));
				setDisplayedCalculation((displayedCalculation) =>
					displayedCalculation.concat(setMathSign())
				);
			}
			setIsBeforeNumber(false);
		}
	};

	const clearAll = () => {
		setCalculation("");
		setDisplayedCalculation("");
		setResult(null);
	};

	const removeLast = () => {
		setCalculation(calculation.slice(0, -1));
		setDisplayedCalculation(displayedCalculation.slice(0, -1));
		if (
			displayedCalculation.slice(-2) === "+" ||
			displayedCalculation.slice(-2) === "-" ||
			displayedCalculation.slice(-2) === "×" ||
			displayedCalculation.slice(-2) === ":" ||
			displayedCalculation.slice(-2) === "²"
		) {
			setIsBeforeNumber(false);
		} else {
			setIsBeforeNumber(true);
		}
	};

	useEffect(() => {
		try {
			setResult(
				eval(calculation)
					.toFixed(2)
					.replace(/\.0+$|(\.\d*[1-9])(0+)$/, "")
			);
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
		removeLast
	};
};
