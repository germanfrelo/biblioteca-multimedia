function SearchForm({ searchTerm, setSearchTerm }) {
	return (
		<form
			role="search"
			onSubmit={(event) => {
				event.preventDefault();
			}}
			className="stack"
		>
			<label htmlFor="search-input" className="stack">
				<strong>Buscar</strong>
				<span>Por nombre o fecha de creación</span>
			</label>
			<input type="search" id="search-input" name="q" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} />
		</form>
	);
}

export default SearchForm;
