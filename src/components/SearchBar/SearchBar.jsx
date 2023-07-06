import styles from "./Searchbar.module.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function SearchBar(props) {
   const [id, setId] = useState("")

   const handleChange = (event) =>{
      setId(event.target.value)
   }

   return (
      <div className={styles.searchfirst}>
         <div>
         <h1>RICK & MORTY</h1>
            <input className={styles.searchbar} value={id} onChange={handleChange} type='search' />
            <button className={styles.botton} onClick={ () => {props.onSearch(id); setId("")}}>AGREGAR</button>
            <button>
                <NavLink to="/about">About Me</NavLink>
            </button>
            <button>
                <NavLink to="/home">Home</NavLink>
            </button>
            <button>
            <NavLink to="/favorites">Favorites</NavLink>
            </button>
         </div>
      </div>
   );
}
