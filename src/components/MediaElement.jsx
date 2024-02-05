import "./MediaElement.css";

function MediaElement({ id, type, name, releaseDate, createdDate }) {
	return (
		<dl className="media-element">
			<dt>ID:</dt>
			<dd>{id}</dd>
			<dt>Tipo:</dt>
			<dd>{type}</dd>
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
