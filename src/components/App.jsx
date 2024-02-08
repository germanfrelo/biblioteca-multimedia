import { useState } from "react";
import { initialElements } from "../data";
import "./App.css";
import ElementsList from "./ElementsList";
import SearchForm from "./SearchForm";

function App() {
	const [elements, setElements] = useState(initialElements);
	const [searchTerm, setSearchTerm] = useState("");

	function filterElements(elements, searchTerm) {
		if (searchTerm === "") {
			return elements;
		}
		const filteredElements = elements.filter(({ name, createdDate }) => {
			return (
				name.toLowerCase().includes(searchTerm.toLowerCase()) ||
				createdDate.includes(searchTerm)
			);
		});
		return filteredElements;
	}

	const filteredElements = filterElements(elements, searchTerm);

	return (
		<>
			<h1>Biblioteca multimedia</h1>

			<SearchForm
				searchTerm={searchTerm}
				setSearchTerm={setSearchTerm}
			/>

			<main>
				{!filteredElements.length ? (
					<p>{`No hay resultados para "${searchTerm}"`}</p>
				) : (
					<>
						{searchTerm ? (
							<p>{`${filteredElements.length} resultados para "${searchTerm}"`}</p>
						) : (
							<p>{`${filteredElements.length} resultados`}</p>
						)}

						<ElementsList elements={filteredElements} />
					</>
				)}
			</main>
		</>
	);
}

export default App;
