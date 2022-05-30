import { useEffect, useState } from 'react';
import PokemonThumbnails from './Components/PokemonThumbnails';

function App() {
  
  // PokedexAPI
  const [allPokemons, setAllPokemons] = useState([])
  const [LoadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20')
  
  const getAllPokemons = async () => {
    const res = await fetch(LoadMore)
    const data = await res.json()

    setLoadMore(data.next)
  
    // Creates an array with stored pokemons data
    function createPokemonObject (result) {
      result.forEach( async (pokemon) => {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon/${pokemon.name}')
        const data = await res.json()
      
        setAllPokemons(currentList => [...currentList, data])
        
        // allPokemons.push(data) to add new pokemons to the array
      })
    } 
    createPokemonObject(data.result)
    await console.log(allPokemons)

  }

  useEffect(() => {
    getAllPokemons()
  }, [])
  


  return (
    <div className="app-container">
      <h1>Poke evolution</h1>
      <div className ='pokemon-container'>
        <div className='all-containers'>
          
          {/* Return all pokemon names */}
          
          {allPokemons.map(pokemon =>
            <PokemonThumbnails
            key={index}
            id={pokemonStats.id}
            name={pokemonStats.name}
            image={pokemonStats.sprites.other.dream_world.front_default}
            type={pokemonStats.types[0].type.name}
            />
            )}
        
        </div>
        <button className='load-more'>Load More</button>
      </div>
    </div>
  );
}

export default App;
