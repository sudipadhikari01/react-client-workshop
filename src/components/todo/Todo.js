import React from 'react'
import {  useNavigate } from 'react-router'

export const Todo = (props) => {
    const navigate  = useNavigate();

   const onClicked =(id)=>{
    navigate('/todo/'+id);

    }
  return (
    <div onClick={()=>onClicked(props.id)}>
        <h2>{props.title}</h2>
    </div>
  )
}

export default Todo;
