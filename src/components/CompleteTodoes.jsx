import React from "react";

export const CompleteTodoes = (props) => {
  const { todo, onClickBack } = props;
  return (
    <div className="complete_area">
      <p className="title">未完了のToDo</p>
      <ul>
        {todo.map((todo, index) => {
          return (
            <div key={todo} className="list_row">
              <li>{todo}</li>
              <button onClick={() => onClickBack(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
