import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import { connect } from "react-redux";
import { useState, useEffect }  from "react";

function Card({id, name, status, species, gender, origin, image, onClose , addFav, removeFav, myFavorites}) {
   const [ isFav, setIsFav ] =  useState(false);

   const handleFavorite = () => {
      if(isFav){
         setIsFav(false);
         removeFav(id);
      }
      else {
         setIsFav(true);
         addFav({id, name, status, species, gender, origin, image})
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);
 
   return (
         <div className={styles.carta}>

            <button onClick={handleFavorite}>{isFav ? "❤️":"🤍"}</button>

 
            <div className={styles.firstdivision}> 
               <button className={styles.button} onClick={() => onClose(id) }>X</button>
               <img className={styles.imagen} src={ image } alt="Foto de " {...name} />
            </div>
            <div className={styles.containerName}>
               <Link to={`/detail/${id}`} >
                  <h3 className="card-name">{name}</h3>
               </Link>
            </div>
            <div className={styles.conttext}>
               {/* <h2 className={styles.text}>{ status }</h2> */}
               <h2 className={styles.text}>{ species }</h2>
               <h2 className={styles.text}>{ gender }</h2>
               {/* <h2 className={styles.text}>{ origin }</h2> */}
            </div>
         </div>
   );
}

const mapStateToProps = (state) => {
   return{
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProp = (dispatch) =>{
   return{
      addFav : (character) => { dispatch(addFav(character)) },
      removeFav : (id) => { dispatch(removeFav(id)) }
   }
}

export default connect(
   mapStateToProps,
   mapDispatchToProp,
)(Card);

