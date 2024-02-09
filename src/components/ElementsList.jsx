import { elementTypes } from "../data";
import MediaElement from "./MediaElement";

export default function ElementsList({ elements, handleEditElement }) {
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
						{movies.map((element) => (
							<li key={element.id}>
								<MediaElement
									element={element}
									handleEditElement={handleEditElement}
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
						{videoGames.map((element) => (
							<li key={element.id}>
								<MediaElement
									element={element}
									handleEditElement={handleEditElement}
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
						{ebooks.map((element) => (
							<li key={element.id}>
								<MediaElement
									element={element}
									handleEditElement={handleEditElement}
								/>
							</li>
						))}
					</ul>
				</section>
			)}
		</div>
	);
}
