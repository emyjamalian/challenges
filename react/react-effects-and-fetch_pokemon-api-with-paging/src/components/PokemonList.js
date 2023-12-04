import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    async function loadPokemon() {
      let url = `https://pokeapi.co/api/v2/pokemon?offset=${page}`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        setPokemon(data.results);
        console.log(data);
        console.log(data.next);
        console.log("p: " + data.previous);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, [page]);

  if (pokemon <= 0) return null;

  return (
    <main>
      <button type="button" onClick={() => setPage(page - 1)}>
        Previous Page
      </button>
      <button type="button" onClick={() => setPage(page + 1)}>
        Next Page
      </button>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
