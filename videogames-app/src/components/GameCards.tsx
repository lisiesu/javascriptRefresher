import React, { useState, useEffect } from "react";
import Card from "./Card";
import Filter from "./Filter";

interface Game {
  id: number;
  name: string;
  background_image: string;
}

const GamesCardsList: React.FC = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedGenre, setSelectedGenre] = useState("");

  const apiKey = import.meta.env.VITE_RAWG_API_KEY;

  useEffect(() => {
    setIsLoading(true);
    let url = `https://api.rawg.io/api/games?key=${apiKey}&page_size=10`;
    if (selectedGenre) {
      url += `&genres=${selectedGenre}`;
    }
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response failed");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data.results);
        setGames(data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, [apiKey, selectedGenre]);

  const handleGenreSelection = (genre: string) => {
    setSelectedGenre(genre);
  };

  if (loading) return <p>Loading games...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <Filter
        apiKey={apiKey}
        handleGenreSelection={handleGenreSelection}
        selectedGenre={selectedGenre}
      />
      <section className="game-cards">
        {games.map((game) => (
          <Card key={game.id} game={game} />
        ))}
      </section>
    </>
  );
};

export default GamesCardsList;
