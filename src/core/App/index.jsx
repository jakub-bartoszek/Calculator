import { Calculator } from "../../features/Calculator";
import { GlobalStyle } from "./GlobalStyle";
import { Normalize } from "styled-normalize";

const App = () => (
	<>
		<Normalize />
		<GlobalStyle />
		<Calculator />
	</>
);

export default App;
