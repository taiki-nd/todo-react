import React, { useImperativeHandle, useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/inputTodo";
import { IncompleteTodoes } from "./components/IncompleteTodoes";
import { CompleteTodoes } from "./components/CompleteTodoes";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodoes, setIncompleteTodoes] = useState([]);
  const [completeTodoes, setCompleteTodoes] = useState([]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodoes = [...incompleteTodoes, todoText];
    setIncompleteTodoes(newTodoes);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodoes = [...incompleteTodoes];
    newTodoes.splice(index, 1);
    setIncompleteTodoes(newTodoes);
  };

  const onClickComplete = (index) => {
    const newIncompleteTodoes = [...incompleteTodoes];
    newIncompleteTodoes.splice(index, 1);

    const newcomompleteTodoes = [...completeTodoes, incompleteTodoes[index]];

    setCompleteTodoes(newcomompleteTodoes);
    setIncompleteTodoes(newIncompleteTodoes);
  };

  const onClickBack = (index) => {
    const newBackTodoes = [...completeTodoes];
    newBackTodoes.splice(index, 1);

    const newBackIncompleteTodoes = [
      ...incompleteTodoes,
      completeTodoes[index]
    ];
    setIncompleteTodoes(newBackIncompleteTodoes);
    setCompleteTodoes(newBackTodoes);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={incompleteTodoes.length >= 5}
      />
      {incompleteTodoes.length >= 5 && (
        <p style={{ color: "red" }}>登録可能なタスク数は5個までです</p>
      )}

      <IncompleteTodoes
        todoes={incompleteTodoes}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />

      <CompleteTodoes todo={completeTodoes} onClickBack={onClickBack} />
    </>
  );
};
