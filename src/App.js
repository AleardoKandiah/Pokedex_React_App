import { useEffect, useState } from 'react';
import PokemonThumbnails from './Components/PokemonThumbnails';

const App = () => {
  
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
        await allPokemons.sort((a, b) => a.id - b.id)
        // allPokemons.push(data) to add new pokemons to the array
      })
    } 
    createPokemonObject(data.result)


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
          
          {allPokemons.map((pokemonStats,index) =>
            <PokemonThumbnails
            key={index}
            id={pokemonStats.id}
            name={pokemonStats.name}

            // SVG with better quality
            image={pokemonStats.sprites.other.dream_world.front_default}
            // Tke type at position 0 and name
            type={pokemonStats.types[0].type.name}
            />
            )}
        
        </div>
        <button className='load-more' onClick={()=> getAllPokemons}>Load More</button>
      </div>
    </div>
  );
}

export default App;
