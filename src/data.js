export const elementTypes = {
	eBook: "eBook",
	movie: "Película",
	videoGame: "Videojuego",
};

// Dates are in UTC
export const initialElements = [
	// Movies
	{
		id: crypto.randomUUID(),
		name: "The Matrix",
		type: elementTypes.movie,
		createdDate: "2024-02-05T11:00:00.000Z",
	},
	{
		id: crypto.randomUUID(),
		name: "Inception",
		type: elementTypes.movie,
		createdDate: "2024-02-05T11:01:00.000Z",
	},
	{
		id: crypto.randomUUID(),
		name: "The Shawshank Redemption",
		type: elementTypes.movie,
		createdDate: "2024-02-05T11:02:00.000Z",
	},
	{
		id: crypto.randomUUID(),
		name: "Pulp Fiction",
		type: elementTypes.movie,
		createdDate: "2024-02-05T11:03:00.000Z",
	},
	{
		id: crypto.randomUUID(),
		name: "The Dark Knight",
		type: elementTypes.movie,
		createdDate: "2024-02-05T11:04:00.000Z",
	},

	// Video games
	{
		id: crypto.randomUUID(),
		name: "Super Mario Odyssey",
		type: elementTypes.videoGame,
		createdDate: "2024-02-05T11:05:00.000Z",
	},
	{
		id: crypto.randomUUID(),
		name: "The Legend of Zelda: Breath of the Wild",
		type: elementTypes.videoGame,
		createdDate: "2024-02-05T11:06:00.000Z",
	},
	{
		id: crypto.randomUUID(),
		name: "Grand Theft Auto V",
		type: elementTypes.videoGame,
		createdDate: "2024-02-05T11:07:00.000Z",
	},
	{
		id: crypto.randomUUID(),
		name: "Red Dead Redemption 2",
		type: elementTypes.videoGame,
		createdDate: "2024-02-05T11:08:00.000Z",
	},
	{
		id: crypto.randomUUID(),
		name: "The Witcher 3: Wild Hunt",
		type: elementTypes.videoGame,
		createdDate: "2024-02-05T11:09:00.000Z",
	},

	// eBooks
	{
		id: crypto.randomUUID(),
		name: "To Kill a Mockingbird",
		type: elementTypes.eBook,
		createdDate: "2024-02-05T11:10:00.000Z",
	},
	{
		id: crypto.randomUUID(),
		name: "1984",
		type: elementTypes.eBook,
		createdDate: "2024-02-05T11:11:00.000Z",
	},
	{
		id: crypto.randomUUID(),
		name: "The Great Gatsby",
		type: elementTypes.eBook,
		createdDate: "2024-02-05T11:12:00.000Z",
	},
	{
		id: crypto.randomUUID(),
		name: "Brave New World",
		type: elementTypes.eBook,
		createdDate: "2024-02-05T11:13:00.000Z",
	},
	{
		id: crypto.randomUUID(),
		name: "The Catcher in the Rye",
		type: elementTypes.eBook,
		createdDate: "2024-02-05T11:14:00.000Z",
	},
];
