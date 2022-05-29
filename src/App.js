import { useState } from 'react';

function App() {
  
  const [allPokemons, setAllPokemons] = useState([])
  const [LoadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20')
  
  const getAllPokemons = async () => {
    const res = await fetch(LoadMore)
  }
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
