import { ADD_ITEM, DELETE_ITEM, COMPLETED_ITEM} from './Types'


export const addItem = item => {
    return {
        type: ADD_ITEM,
        payload: item
    }
}
export const deleteItem = id => {
    return {
        type: DELETE_ITEM,
        payload: id
    }
}
export const completeItem = id => {
    return{
        type: COMPLETED_ITEM,
        payload: id
    }
}