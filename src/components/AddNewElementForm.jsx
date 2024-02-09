import { useState } from "react";
import { elementTypes } from "../data";

function AddNewElementForm({ handleAddElement }) {
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
						{Object.entries(elementTypes).map(
							([elementTypeKey, elementTypeValue]) => (
								<option
									key={elementTypeKey}
									value={elementTypeValue}
								>
									{elementTypeValue}
								</option>
							),
						)}
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
					/>
				</div>

				<button type="submit">Añadir</button>
			</form>
		</>
	);
}

export default AddNewElementForm;
