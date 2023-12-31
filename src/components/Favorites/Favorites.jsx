import { connect,useDispatch } from "react-redux";
import { useState } from "react";
import Card from "../Card/Card";
import { filterCards, oderCards } from "../../redux/actions";

const Favorites = ({myFavorites}) => {
    const [ aux, setAux ] = useState(false) 

    const dispatch = useDispatch()

    const handlerOrder = (event) =>{
        dispatch(oderCards(event.target.value))
        setAux(true);
    }

    const handleFilter = (event) =>{
        dispatch(filterCards(event.target.value))
    }

    return (
        <>
            <select onChange={handlerOrder}>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
            </select>

            <select onChange={handleFilter}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="Unknown">Unknown</option>
                <option value="All">All</option>
            </select>
            {
                myFavorites?.map(fav => {
                    return(
                        <Card
                        key = {fav.id}
                        id={fav.id}
                        name = {fav.name}
                        status = {fav.status}
                        species={fav.species}
                        gender = {fav.gender}
                        origin={fav.origin.name}
                        image={fav.image}
                        onClose={fav.onClose}
                        />
                    )
                })
            }
        </>
    )
}

const mapStateToProps = (state) => {
    return{
        myFavorites: state.myFavorites
    }
}

export default connect(
    mapStateToProps,
    null
)(Favorites);