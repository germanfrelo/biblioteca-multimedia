import { useState } from "react";
import { initialElements } from "../data";
import AddNewElementForm from "./AddNewElementForm";
import "./App.css";
import ElementsList from "./ElementsList";
import SearchForm from "./SearchForm";

function App() {
	const [elements, setElements] = useState(initialElements);
	const [searchTerm, setSearchTerm] = useState("");

	function filterElements({ elements, searchTerm }) {
		if (!searchTerm) {
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

	function handleAddElement({ type, name }) {
		const newElement = {
			id: crypto.randomUUID(),
			name,
			type,
			createdDate: new Date().toISOString(),
		};

		setElements([...elements, newElement]);
	}

	const filteredElements = filterElements({ elements, searchTerm });

	return (
		<div className="stack">
			<h1>Biblioteca multimedia</h1>

			<SearchForm
				searchTerm={searchTerm}
				setSearchTerm={setSearchTerm}
			/>

			<h2>Añadir nuevo elemento</h2>

			<AddNewElementForm handleAddElement={handleAddElement} />

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
		</div>
	);
}

export default App;
