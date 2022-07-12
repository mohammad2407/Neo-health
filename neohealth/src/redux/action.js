export const ADD_NEW_ITEM = 'ADD_NEW_ITEM'

export const DELETE = 'DELETE'

export const deleteItem = (id) =>({
        type: DELETE,
        payload : id
})

export const addItem = (newItem) =>({
    type: ADD_NEW_ITEM,
    payload: newItem
})