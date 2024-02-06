import { useState } from "react";
import { initialElements } from "../data";
import "./App.css";
import ElementsList from "./ElementsList";
import SearchForm from "./SearchForm";

function App() {
	const [searchTerm, setSearchTerm] = useState("");
	return (
		<>
			<h1>Biblioteca multimedia</h1>

			<SearchForm searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

			<main>
				<ElementsList elements={initialElements} />
			</main>
		</>
	);
}

export default App;
