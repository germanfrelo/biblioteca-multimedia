import { useState } from "react";
import { initialElements } from "../data";
import { isEqualInputDateAndDate } from "../helpers/dates.helpers";
import AddNewElementForm from "./AddNewElementForm";
import "./App.css";
import ElementsList from "./ElementsList";
import SearchForm from "./SearchForm";

export default function App() {
	const [elements, setElements] = useState(initialElements);
	const [nameSearch, setNameSearch] = useState("");
	const [createdDateSearch, setCreatedDateSearch] = useState("");

	function handleAddElement({ type, name }) {
		const newElement = {
			id: crypto.randomUUID(),
			name,
			type,
			createdDate: new Date(), // current local date and time user's browser
		};

		setElements([...elements, newElement]);
	}

	function handleEditElement(updatedElement) {
		const updatedElements = elements.map((element) =>
			element.id === updatedElement.id ? updatedElement : element,
		);
		setElements(updatedElements);
	}

	function filterElements(elements, nameSearch, createdDateSearch) {
		const trimmedNameSearch = nameSearch.trim();

		if (trimmedNameSearch === "" && createdDateSearch === "") {
			return elements;
		}

		return elements.filter((element) => {
			// Check if name input is not empty and element's name property includes the name input
			const doesNameMatch =
				trimmedNameSearch !== "" &&
				element.name.toLowerCase().includes(trimmedNameSearch.toLowerCase());

			// Check if createdDate input is not empty and element's createdDate property matches the date from input
			const doesCreatedDateMatch =
				createdDateSearch !== "" &&
				isEqualInputDateAndDate(createdDateSearch, element.createdDate);

			// Return true if one input matches and the other is empty, or if both match
			return (
				(doesNameMatch && (createdDateSearch === "" || doesCreatedDateMatch)) ||
				(doesCreatedDateMatch && (trimmedNameSearch === "" || doesNameMatch))
			);
		});
	}

	const visibleElements = filterElements(
		elements,
		nameSearch,
		createdDateSearch,
	);

	return (
		<div className="wrapper stack-lg">
			<header className="text-center">
				<h1>Biblioteca multimedia</h1>
			</header>

			<div className="with-sidebar-left">
				<div className="stack-lg">
					<section className="stack-sm">
						<h2>Filtrar</h2>
						<SearchForm
							nameSearch={nameSearch}
							setNameSearch={setNameSearch}
							createdDateSearch={createdDateSearch}
							setCreatedDateSearch={setCreatedDateSearch}
						/>
					</section>

					<section className="stack-sm">
						<h2>Añadir elemento</h2>
						<AddNewElementForm handleAddElement={handleAddElement} />
					</section>
				</div>

				<main className="stack-lg">
					{!visibleElements.length > 0 ? (
						<p>No hay resultados.</p>
					) : (
						<>
							<p>{`${visibleElements.length} elementos`}</p>

							<ElementsList
								elements={visibleElements}
								handleEditElement={handleEditElement}
							/>
						</>
					)}
				</main>
			</div>
		</div>
	);
}
