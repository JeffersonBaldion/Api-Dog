import * as actions from '../actions/actions'

const initialState = {
    loadedBreed:false,
    loadedTemperament:false,
    loadedSearch:false,
    loadedDetail:false,
    razas:{},
    busqueda:{},
    copyBusqueda:{},
    detail:{},
    temperaments:{},
    
}

export default function reducer(state = initialState, action){
    switch (action.type) {
        case actions.GET_DOGS:
            return {...state,
                razas: action.payload,
                loadedBreed: true,
                
                
            }
        case actions.GET_TEMPERAMENTS:
            return {
                ...state,
                temperaments: action.payload,
                loadedTemperament: true
            }
        case actions.GET_SEARCH:
            return {
                ...state,
                busqueda: action.payload,
                loadedSearch:true
            }
        case actions.GET_DETAIL:
            return {
                ...state,
                detail: action.payload,
                loadedDetail:true
            }
        case actions.CLEAN_DETAIL:
            return {
                ...state,
                detail: action.payload,
                loadedDetail:false
            }
        case actions.FILTER_DOGS:
            return {
                ...state,
                razas: action.payload,
            }   
        default:
            return {...state}    
    }                   
}