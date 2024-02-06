import "./MediaElement.css";

function MediaElement({ name, releaseDate, createdDate }) {
	return (
		<dl className="media-element">
			<dt>Nombre:</dt>
			<dd>{name}</dd>
			<dt>Fecha lanzamiento:</dt>
			<dd>{releaseDate}</dd>
			<dt>Fecha creación:</dt>
			<dd>{createdDate}</dd>
		</dl>
	);
}

export default MediaElement;
