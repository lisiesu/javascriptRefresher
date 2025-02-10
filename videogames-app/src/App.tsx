import Header from "./components/Header";
import Hero from "./components/Hero";
import GamesCardsList from "./components/GameCards";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <GamesCardsList />
      </main>
    </div>
  );
}

export default App;
