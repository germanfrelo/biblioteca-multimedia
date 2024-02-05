import elements from "../data";
import "./App.css";
import MediaElement from "./MediaElement";

function App() {
	const peliculas = elements.filter((element) => element.type === "pelicula");
	const videojuegos = elements.filter((element) => element.type === "videojuego");
	const ebooks = elements.filter((element) => element.type === "ebook");

	return (
		<>
			<h1>Biblioteca multimedia</h1>

			<main className="grid">
				<section>
					<h2>Películas</h2>

					<ul className="grid">
						{peliculas.map(({ id, type, name, releaseDate, createdDate }) => (
							<li key={id}>
								<MediaElement id={id} type={type} name={name} releaseDate={releaseDate} createdDate={createdDate} />
							</li>
						))}
					</ul>
				</section>

				<section>
					<h2>Videojuegos</h2>

					<ul className="grid">
						{videojuegos.map(({ id, type, name, releaseDate, createdDate }) => (
							<li key={id}>
								<MediaElement id={id} type={type} name={name} releaseDate={releaseDate} createdDate={createdDate} />
							</li>
						))}
					</ul>
				</section>

				<section>
					<h2>eBooks</h2>

					<ul className="grid">
						{ebooks.map(({ id, type, name, releaseDate, createdDate }) => (
							<li key={id}>
								<MediaElement id={id} type={type} name={name} releaseDate={releaseDate} createdDate={createdDate} />
							</li>
						))}
					</ul>
				</section>
			</main>
		</>
	);
}

export default App;
