import React, { useState } from 'react'
import {store} from '../redux/store'
import { ADD_NEW_ITEM } from '../redux/action'
export const Addtodo = () => {
  const [newItems, setNewItems] = useState('');
  const handleChange = (e) =>{
    setNewItems(e.target.value);
  }

  const handleSubmit = (event) =>{
    store.dispatch({
      type:ADD_NEW_ITEM,
      payload:newItems
    })
    setNewItems("");
  }
  return (
    <div>
        <form >
          <label>Todo:</label>
          <input type="text" placeholder='Enter Todo' onChange={handleChange} value={newItems} />
          <input type="button" value= "Add" onClick={handleSubmit} />
        </form>
    </div>
  )
}
