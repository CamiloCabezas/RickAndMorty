import { ADD_FAV , REMOVE_FAV, FILTER_CARDS, ODER_CARDS } from './actions-types'

export const addFav = (character) => {
    return{
        type: ADD_FAV,
        payload : character
    }   
}

export const removeFav = (id) => {
    return{
        type: REMOVE_FAV,
        payload: id
    }
}

export const filterCards = (gender) =>{
    return {
        type: FILTER_CARDS,
        payload: gender
    }
}

export const oderCards = (order) =>{
    return{
        type: ODER_CARDS,
        payload: order//=> A
    }
}

