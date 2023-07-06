import { ADD_FAV, REMOVE_FAV, FILTER_CARDS, ODER_CARDS } from "./actions-types"

const initialState ={
    myFavorites : [],
    allCharacters : []
};

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case ADD_FAV:
            return{
                    ...state,
                    myFavorites: [...state.allCharacters,action.payload],
                    allCharacters : [...state.allCharacters,action.payload]
            }
        case REMOVE_FAV:
            return{
                ...state,
                myFavorites: state.myFavorites.filter(fav => fav.id !== Number(action.payload))
            }
        case FILTER_CARDS:
            if(action.payload === "All"){
                return{
                    ...state,
                    myFavorites:state.allCharacters
                }
            }
            else{
                const allCharactersFilter =  state.allCharacters.filter(character => character.gender === action.payload)
                return{
                    ...state,
                    myFavorites: allCharactersFilter,
                }
            }
            /*
                const allCharactersFilter =  state.allCharacters.filter(character => character.gender === action.payload)
                return{
                    ...state,
                    myFavorites : 
                        action.payload === "All"
                        ? [ ...state.allcharacters]
                        : allCharactersFilter
                }
            */
            

        case ODER_CARDS:
            const allCharactersFavCopy = [...state.allCharacters]//Aca estoy creando una copia del estado global
            return {
                ...state,
                myFavorites:
                    action.payload === "A"
                    ? allCharactersFavCopy.sort((a,b) => a.id - b.id)
                    : allCharactersFavCopy.sort((a,b) => b.id - a.id)
            }
        default:
            return {
                ...state
            }
    }
}

export default reducer;