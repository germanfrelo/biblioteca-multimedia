import PropTypes from "prop-types";

SearchForm.propTypes = {
	nameSearch: PropTypes.string.isRequired,
	setNameSearch: PropTypes.func.isRequired,
	createdDateSearch: PropTypes.string.isRequired,
	setCreatedDateSearch: PropTypes.func.isRequired,
};

export default function SearchForm({
	nameSearch,
	setNameSearch,
	createdDateSearch,
	setCreatedDateSearch,
}) {
	return (
		<form
			role="search"
			onSubmit={(event) => {
				event.preventDefault();
			}}
			className="stack-md"
		>
			<div className="stack-xs">
				<label htmlFor="search-name">Nombre</label>
				<input
					type="search"
					id="search-name"
					name="name"
					value={nameSearch}
					onChange={(event) => setNameSearch(event.target.value)}
				/>
			</div>

			<div className="stack-xs">
				<label htmlFor="search-created-date">Fecha de creación</label>
				<input
					type="date"
					id="search-created-date"
					name="created-date"
					value={createdDateSearch}
					onChange={(event) => setCreatedDateSearch(event.target.value)}
				/>
			</div>
		</form>
	);
}
