import { useEffect,useState } from 'react';
import './App.css';
import Recipe from './Recipe';

const App = ()=>{

  const APP_ID = "e74d7457"
  const APP_KEY = "99c1ce920340b9fdffd2edf1015aef07"

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken")

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`

  useEffect(()=>{
    getRecipes()
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(url);
    const data = await response.json()
    // console.log(data.hits)
    setRecipes(data.hits);
    console.log(data.hits)
  }

  const updateSearch = (e) => {
      setSearch(e.target.value)
    // console.log(search)
  }

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search)
    setSearch("")
  }


  return(
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch} placeholder="Search recipes..."/>
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="recipes">
        {recipes.map((recipe)=>{
          return <Recipe 
          key={recipe.recipe.label}
          title={recipe.recipe.label} 
          calories={Math.round(recipe.recipe.calories)} 
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
          /> 
        })}
      </div>
    </div>
  );
}

export default App;
