import { initialElements } from "../data";
import "./App.css";
import ElementsList from "./ElementsList";

function App() {
	return (
		<>
			<h1>Biblioteca multimedia</h1>

			<main>
				<ElementsList elements={initialElements} />
			</main>
		</>
	);
}

export default App;
