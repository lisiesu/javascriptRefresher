import React, { useState, useEffect } from "react";

interface Game {
  id: number;
  name: string;
  background_image: string;
}

const GamesCardsList: React.FC = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const apiKey = import.meta.env.VITE_RAWG_API_KEY;

  useEffect(() => {
    fetch(`https://api.rawg.io/api/games?key=${apiKey}&page_size=10`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response failed");
        }
        return response.json();
      })
      .then((data) => {
        setGames(data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, [apiKey]);

  if (loading) return <p>Loading games...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section className="game-cards">
      {games.map((game) => (
        <div key={game.id} className="card">
          <img src={game.background_image} alt={game.name} />
          <h3>{game.name}</h3>
        </div>
      ))}
    </section>
  );
};

export default GamesCardsList;
