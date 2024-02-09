import { elementTypes } from "../data";
import MediaElement from "./MediaElement";

function ElementsList({ elements }) {
	const movies = elements.filter(
		(element) => element.type === elementTypes.movie,
	);
	const videoGames = elements.filter(
		(element) => element.type === elementTypes.videoGame,
	);
	const ebooks = elements.filter(
		(element) => element.type === elementTypes.eBook,
	);

	return (
		<div className="grid">
			{movies.length > 0 && (
				<section className="stack-md">
					<h2>Películas</h2>

					<ul className="list-unstyled grid">
						{movies.map(({ id, name, createdDate }) => (
							<li key={id}>
								<MediaElement
									name={name}
									createdDate={createdDate}
								/>
							</li>
						))}
					</ul>
				</section>
			)}

			{videoGames.length > 0 && (
				<section className="stack-md">
					<h2>Videojuegos</h2>

					<ul className="list-unstyled grid">
						{videoGames.map(({ id, name, createdDate }) => (
							<li key={id}>
								<MediaElement
									name={name}
									createdDate={createdDate}
								/>
							</li>
						))}
					</ul>
				</section>
			)}

			{ebooks.length > 0 && (
				<section className="stack-md">
					<h2>eBooks</h2>

					<ul className="list-unstyled grid">
						{ebooks.map(({ id, name, createdDate }) => (
							<li key={id}>
								<MediaElement
									name={name}
									createdDate={createdDate}
								/>
							</li>
						))}
					</ul>
				</section>
			)}
		</div>
	);
}

export default ElementsList;
