import "./MediaElement.css";

export default function MediaElement({ name, createdDate }) {
	return (
		<dl className="media-element">
			<dt>Nombre:</dt>
			<dd>{name}</dd>

			<dt>Fecha creación:</dt>
			<dd>{new Date(createdDate).toLocaleDateString()}</dd>
		</dl>
	);
}
