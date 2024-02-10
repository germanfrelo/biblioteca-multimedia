import { useState } from "react";
import "./Element.css";

export default function MediaElement({ element, handleEditElement }) {
	const { name, createdDate } = element;
	const [isEditing, setIsEditing] = useState(false);
	const [editedElement, setEditedElement] = useState({ ...element });

	function handleInputChange(event) {
		const { name, value } = event.target;
		setEditedElement({
			...editedElement,
			[name]: value,
		});
	}

	const handleEditToggle = () => {
		setIsEditing(!isEditing);
		// Reset the inputs
		setEditedElement({ ...element });
	};

	function handleSave() {
		handleEditElement(editedElement);
		setIsEditing(false);
	}

	const editElementForm = (
		/* Name */
		<div className="stack-sm">
			<div className="stack-xs">
				<label htmlFor="name">Nombre</label>
				<input
					type="text"
					id="name"
					name="name"
					value={editedElement.name}
					onChange={handleInputChange}
					required={true}
					autoComplete="off"
				/>
			</div>
			<button onClick={handleSave}>Guardar</button>
		</div>
	);
	const elementMarkup = (
		<dl className="stack-sm element">
			<div>
				<dt className="visually-hidden">Nombre:</dt>
				<dd className="element-name">{name}</dd>
			</div>

			<div className="cluster">
				<dt>Fecha creación:</dt>
				<dd>{new Date(createdDate).toLocaleDateString()}</dd>
			</div>
		</dl>
	);

	return (
		<div className="stack-sm">
			{isEditing ? editElementForm : elementMarkup}

			<button onClick={handleEditToggle}>
				{isEditing ? "Cancelar" : "Editar"}
			</button>
		</div>
	);
}
