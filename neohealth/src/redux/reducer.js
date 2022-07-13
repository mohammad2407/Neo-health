import {ADD_NEW_ITEM,DELETE} from './action'

const initialState = {
    todos:[],              
}

export const reducer = (store = initialState,action) =>{
    switch(action.type) {
        case ADD_NEW_ITEM:
        return {
            ...store,
            todos: [...store.todos, action.payload]
        }
        case DELETE:
            const updated = store.todos.filter((el, index) => index != action.payload)
            return {
                ...store,
                todos : updated
            }
        default :
        return store;
    }
}