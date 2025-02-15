import PropTypes from "prop-types";
import { elementTypes } from "../data";
import MediaElement from "./MediaElement";

ElementsList.propTypes = {
	elements: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			type: PropTypes.string.isRequired,
			createdDate: PropTypes.instanceOf(Date).isRequired,
		}),
	).isRequired,
	handleEditElement: PropTypes.func.isRequired,
};

export default function ElementsList({ elements, handleEditElement }) {
	function renderElementsByType(elements, type) {
		const filteredElements = elements.filter(
			(element) => element.type === type.id,
		);

		// Don't render the section if there are no filtered elements
		if (!filteredElements.length > 0) {
			return null;
		}

		return (
			<section
				key={type.id}
				className="stack-md"
			>
				<h2>{type.plural}</h2>

				<ul className="list-unstyled grid">
					{filteredElements.map((element) => (
						<li key={element.id}>
							<MediaElement
								element={element}
								handleEditElement={handleEditElement}
							/>
						</li>
					))}
				</ul>
			</section>
		);
	}

	return (
		<div className="grid">
			{Object.values(elementTypes).map((type) =>
				renderElementsByType(elements, type),
			)}
		</div>
	);
}
