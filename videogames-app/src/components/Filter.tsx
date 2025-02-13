import React, { useState, useEffect } from "react";

interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

interface GenreFilterProps {
  selectedGenre: string;
  handleGenreSelection: (genre: string) => void;
  apiKey: string;
}

const Filter: React.FC<GenreFilterProps> = ({
  selectedGenre,
  handleGenreSelection,
  apiKey,
}) => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState<string | null>(null);

  //Fetching list of genres
  useEffect(() => {
    fetch(`https://api.rawg.io/api/genres?key=${apiKey}`)
      .then((res) => res.json())
      .then((data) => setGenres(data.results))
      .catch((error) => {
        console.error("Error fetching genres", error);
        setError(error);
      });
  }, [apiKey]);

  if (error) {
    return <p>Error loading genres: {error}</p>;
  }
  console.log(genres);
  return (
    <div style={{ padding: "1rem 2rem" }}>
      <label htmlFor="genre-select" style={{ marginRight: "0.5rem" }}>
        Filter by Genre
      </label>
      <select
        id="genre-select"
        value={selectedGenre}
        onChange={(e) => handleGenreSelection(e.target.value)}
      >
        <option value="">All</option>
        {genres.map((g) => (
          <option key={g.id} value={g.slug}>
            {g.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
