import React from 'react'
import {store} from '../redux/store'
import {useSelector,useDispatch} from 'react-redux'
import { DELETE } from '../redux/action'
export const Todolist = () => {

  const {todos} = useSelector (store => store)
  const dispatch = useDispatch();
  const handleDelete = (e) =>{
    dispatch({
      type: DELETE,
      payload : e.target.name
    })
  }
  return (
    <div>
        {
            todos.map((item,index) => {
               return <div key={index}>
                    <h3>{item}</h3>
                    <button name={index} onClick ={handleDelete}>delete</button>
                </div>
            })
        }
    </div>
  )
}
