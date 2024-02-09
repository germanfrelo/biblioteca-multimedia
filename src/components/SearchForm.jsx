export default function SearchForm({ searchTerm, setSearchTerm }) {
	return (
		<form
			role="search"
			onSubmit={(event) => {
				event.preventDefault();
			}}
			className="wrapper stack-xs text-center"
			data-layout="center"
		>
			<label
				htmlFor="search-input"
				className="stack-xs"
			>
				Filtar (por nombre o fecha de creación)
			</label>
			<input
				type="search"
				id="search-input"
				name="q"
				value={searchTerm}
				onChange={(event) => setSearchTerm(event.target.value)}
			/>
		</form>
	);
}
