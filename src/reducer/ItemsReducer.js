import { ADD_ITEM, DELETE_ITEM, COMPLETED_ITEM } from '../action/Types'


let initialstate = []


const ItemsReducer = (state = initialstate, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return [
                ...state,
                action.payload
            ]

        case DELETE_ITEM:

            return state.filter(el => el.id !== action.payload)
        case COMPLETED_ITEM:
            return state.map(el => el.id === action.payload ? { ...el, completed: !el.completed } : el)

        default:
            return state

    }
}
export default ItemsReducer