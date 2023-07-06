import axios from 'axios'
import { useParams } from 'react-router-dom';//useParams nos permite obtener la variable que ponemos en la url en este caso el ID
import { useState, useEffect } from 'react';


const Detail = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState({})

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]); 

    return(
        <div>
            
                {/* character ? <h2>{character.name}</h2> : null,
                character ? <h2>{character.status}</h2> : null,
                character ? <h2>{character.species}</h2> : null,
                character ? <h2>{character.gender}</h2> : null,
                character ? <h2>{character.origin}</h2> : null,
                character ? <img src={character.image}/> */}
                <h2>{character?.name}</h2>
                <h2>{character?.status}</h2>
                <h2>{character?.species}</h2>
                <h2>{character?.gender}</h2>
                <h2>{character?.origin?.name}</h2>
                <img src={character?.image} alt={character?.name}/>
            

        </div>
    )
}

export default Detail;