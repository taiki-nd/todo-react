import React from "react";

export const IncompleteTodoes = (props) => {
  const { todoes, onClickComplete, onClickDelete } = props;
  return (
    <div className="incomplete_area">
      <p className="title">未完了のToDo</p>
      <ul>
        {todoes.map((todo, index) => {
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
  );
};
