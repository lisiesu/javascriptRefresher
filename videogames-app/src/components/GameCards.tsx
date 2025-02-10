import React from "react";

const dummyGamesArray = [
  {
    id: 1,
    title: "Game One",
    image:
      "https://dash-bootstrap-components.opensource.faculty.ai/static/images/placeholder286x180.png",
  },
  {
    id: 2,
    title: "Game Two",
    image:
      "https://dash-bootstrap-components.opensource.faculty.ai/static/images/placeholder286x180.png",
  },
  {
    id: 3,
    title: "Game Three",
    image:
      "https://dash-bootstrap-components.opensource.faculty.ai/static/images/placeholder286x180.png",
  },
];

const GamesCardsList: React.FC = () => {
  return (
    <section className="game-cards">
      {dummyGamesArray.map((game) => (
        <div key={game.id} className="card">
          <img src={game.image} alt={game.title} />
          <h3>{game.title}</h3>
        </div>
      ))}
    </section>
  );
};

export default GamesCardsList;
