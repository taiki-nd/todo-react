import React, { useState } from "react";
import "./styles.css";

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
      <div className="input_area">
        <input
          placeholder="ToDo"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>

      <div className="incomplete_area">
        <p className="title">未完了のToDo</p>
        <ul>
          {incompleteTodoes.map((todo, index) => {
            return (
              <div key={todo} className="list_row">
                <li>{todo}</li>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div>

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
