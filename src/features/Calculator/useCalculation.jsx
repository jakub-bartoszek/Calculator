import { useEffect, useState } from "react";

export const useCalculation = () => {
	const [calculation, setCalculation] = useState("");
	const [displayedCalculation, setDisplayedCalculation] =
		useState("");
	const [isBeforeNumber, setIsBeforeNumber] = useState(true);
	const [result, setResult] = useState("");
	const [areBracketsEven, setAreBracketsEven] = useState(true);

	const calculate = () => {
		setCalculation(result);
		setDisplayedCalculation(result);
	};

	useEffect(() => {
		console.log(displayedCalculation.length);
	}, [displayedCalculation]);

	const insertNumber = (number) => {
		if (calculation.length < 21) {
			setCalculation((calculation) => calculation.concat(number));
			setDisplayedCalculation((displayedCalculation) =>
				displayedCalculation.concat(number)
			);
			setIsBeforeNumber(true);
		}
	};

	const insertBracket = () => {
		if (calculation.length < 21) {
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
		if (calculation.length < 21) {
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
	};
};
