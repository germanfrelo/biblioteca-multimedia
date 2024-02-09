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

	function handleEditElement(updatedElement) {
		const updatedElements = elements.map((element) =>
			element.id === updatedElement.id ? updatedElement : element,
		);
		setElements(updatedElements);
	}

	const filteredElements = filterElements({ elements, searchTerm });

	return (
		<div className="stack-lg">
			<h1 className="text-center">Biblioteca multimedia</h1>

			<div className="with-sidebar-left">
				<div className="stack-lg">
					<section className="stack-sm">
						<h2>Buscar</h2>
						<SearchForm
							searchTerm={searchTerm}
							setSearchTerm={setSearchTerm}
						/>
					</section>

					<section className="stack-sm">
						<h2>Añadir elemento</h2>
						<AddNewElementForm handleAddElement={handleAddElement} />
					</section>
				</div>

				<main className="stack-lg">
					{!filteredElements.length > 0 ? (
						<p>{`No hay resultados para "${searchTerm}".`}</p>
					) : (
						<>
							{searchTerm && (
								<p>{`${filteredElements.length} resultados para "${searchTerm}".`}</p>
							)}

							<ElementsList
								elements={filteredElements}
								handleEditElement={handleEditElement}
							/>
						</>
					)}
				</main>
			</div>
		</div>
	);
}

export default App;
