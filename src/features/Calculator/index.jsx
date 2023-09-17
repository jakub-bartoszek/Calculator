import { Wrapper } from "./styled";
import { Keyboard } from "./Keyboard";
import { Display } from "./Display";

export const Calculator = () => (
	<Wrapper>
		<Display />
		<Keyboard />
	</Wrapper>
);
