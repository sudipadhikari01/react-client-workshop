import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import Todo from "./Todo";

const Todos = () => {
  const [todosState, setTodosState] = useState([]);
  const fetchData = async () => {
    let response = await axios.get("http://localhost:8085/todos");
    // let copy = [...todosState];
    setTodosState(response.data);
    console.log(todosState);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {todosState.map((item) => {
        return <Todo id={item.id} title={item.title} key={item.id}></Todo>;
      })}
    </div>
  );
};

export default Todos;
