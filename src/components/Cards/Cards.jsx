import Card from "../Card/Card";
import styles from "./Cards.module.css"

export default function Cards({characters , onClose}) {

   return (
      <div className={styles.container}>
         {
            characters.map((character) =>{
               return(
                  <div className={styles.container}>
                     <div className={styles.card}>
                        <Card
                        key = {character.id}
                        id={character.id}
                        name = {character.name}
                        status = {character.status}
                        species={character.species}
                        gender = {character.gender}
                        origin={character.origin.name}
                        image={character.image}
                        onClose={onClose}
                        />
                     </div>
                  </div>
               )
            })
         }
      </div>
   );
}

//  character.name, character.status, character.species, character.gender, character.origin, character.image