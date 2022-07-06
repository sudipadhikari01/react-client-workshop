import React from 'react'
import { useParams } from 'react-router'
import { useState,useEffect } from 'react';
import axios from 'axios';

const DetailsTodo = () => {
    const params = useParams();
    const [todosState,setTodosState] = useState({});

    const fetchData = async()=>{
        const result = await axios.get('http://localhost:8085/todos/'+params.id);
        setTodosState(result.data);
    }

    useEffect(() => {
       fetchData();
    }, [params.id]);
  return (
    <div>
        <h4>{todosState.title}</h4>
        <h4>{todosState.description}</h4>
    </div>
  )
}

export default DetailsTodo