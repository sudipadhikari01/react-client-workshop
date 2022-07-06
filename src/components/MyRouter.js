import React from "react";
import { Routes,Route } from "react-router";
import DetailsTodo from "./todo/DetailsTodo";
import Todos from "./todo/Todos";

export default function MyRoutes(){
    return(
    <Routes>
        <Route path="/todos" element={<Todos></Todos>}></Route>
        <Route path ="/users" element=""></Route>
        <Route path ="/todo/:id" element={<DetailsTodo></DetailsTodo>}></Route>
    </Routes>
    );
}