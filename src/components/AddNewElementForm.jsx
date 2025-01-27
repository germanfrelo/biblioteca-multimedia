import PropTypes from "prop-types";
import { useState } from "react";
import { elementTypes } from "../data";

AddNewElementForm.propTypes = {
	handleAddElement: PropTypes.func.isRequired,
};

export default function AddNewElementForm({ handleAddElement }) {
	const [type, setType] = useState("");
	const [name, setName] = useState("");

	function handleSubmit(event) {
		event.preventDefault();
		handleAddElement({ type, name });
		// Empty form inputs
		setType("");
		setName("");
	}

	return (
		<>
			<form
				onSubmit={handleSubmit}
				className="stack-md"
			>
				{/* Type */}
				<div className="stack-xs">
					<label htmlFor="type">Tipo</label>
					<select
						id="type"
						name="type"
						value={type}
						onChange={(event) => setType(event.target.value)}
						required={true}
					>
						<option value="">— Selecciona el tipo —</option>
						{Object.values(elementTypes).map((type) => (
							<option
								key={type.id}
								value={type.id}
							>
								{type.singular}
							</option>
						))}
					</select>
				</div>

				{/* Name */}
				<div className="stack-xs">
					<label htmlFor="name">Nombre</label>
					<input
						type="text"
						id="name"
						name="name"
						value={name}
						onChange={(event) => setName(event.target.value)}
						required={true}
						autoComplete="off"
					/>
				</div>

				<button type="submit">Añadir</button>
			</form>
		</>
	);
}
