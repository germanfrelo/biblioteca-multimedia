import { elementTypes, initialElements } from "../data";
import "./App.css";
import MediaElement from "./MediaElement";

function App() {
	const movies = initialElements.filter((element) => element.type === elementTypes.movie);
	const videoGames = initialElements.filter((element) => element.type === elementTypes.videoGame);
	const ebooks = initialElements.filter((element) => element.type === elementTypes.eBook);

	return (
		<>
			<h1>Biblioteca multimedia</h1>

			<main className="grid">
				<section>
					<h2>Películas</h2>

					<ul className="list-unstyled grid">
						{movies.map(({ id, name, releaseDate, createdDate }) => (
							<li key={id}>
								<MediaElement name={name} releaseDate={releaseDate} createdDate={createdDate} />
							</li>
						))}
					</ul>
				</section>

				<section>
					<h2>Videojuegos</h2>

					<ul className="list-unstyled grid">
						{videoGames.map(({ id, name, releaseDate, createdDate }) => (
							<li key={id}>
								<MediaElement name={name} releaseDate={releaseDate} createdDate={createdDate} />
							</li>
						))}
					</ul>
				</section>

				<section>
					<h2>eBooks</h2>

					<ul className="list-unstyled grid">
						{ebooks.map(({ id, name, releaseDate, createdDate }) => (
							<li key={id}>
								<MediaElement name={name} releaseDate={releaseDate} createdDate={createdDate} />
							</li>
						))}
					</ul>
				</section>
			</main>
		</>
	);
}

export default App;
