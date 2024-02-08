import "./MediaElement.css";

function MediaElement({ name, createdDate }) {
	return (
		<dl className="media-element">
			<dt>Nombre:</dt>
			<dd>{name}</dd>
			<dt>Fecha creación:</dt>
			<dd>{createdDate}</dd>
		</dl>
	);
}

export default MediaElement;
