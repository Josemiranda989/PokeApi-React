import react from 'react';
import FavoriteContext from "../contexts/favoritesContext"

const { useContext } = react;

const Navbar = () => {
  const { favoritePokemons } = useContext(FavoriteContext)
  

  let imgUrl = 'pokeapi.png'

  return (
    <nav>
      <div />
      <div>
        <img src={imgUrl} alt="pokeApi-logo" className="navbar-image" />
      </div>
      <div>❤️ {favoritePokemons.length}</div>
    </nav>
  )
}

export default Navbar
