import React, { useImperativeHandle, useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/inputTodo";
import { IncompleteTodoes } from "./components/IncompleteTodoes";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodoes, setIncompleteTodoes] = useState(["todo", "todo2"]);
  const [completeTodoes, setCompleteTodoes] = useState(["todo3"]);

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
      />

      <IncompleteTodoes
        todoes={incompleteTodoes}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />

      <div className="complete_area">
        <p className="title">未完了のToDo</p>
        <ul>
          {completeTodoes.map((todo, index) => {
            return (
              <div key={todo} className="list_row">
                <li>{todo}</li>
                <button onClick={() => onClickBack(index)}>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
