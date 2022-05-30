import { useEffect, useState } from 'react';

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
        <div className='all-container'>

        </div>
        <button className='load-more'>Load More</button>
      </div>
    </div>
  );
}

export default App;
