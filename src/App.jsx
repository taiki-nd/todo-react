import React from "react";
import "./styles.css";

export const App = () => {
  return (
    <>
      <div className="input_area">
        <input placeholder="ToDo" />
        <button>追加</button>
      </div>

      <div className="incomplete_area">
        <p className="title">未完了のToDo</p>
        <ul>
          <div className="list_row">
            <li>todo</li>
            <button>完了</button>
            <button>削除</button>
          </div>
        </ul>
      </div>

      <div className="complete_area">
        <p className="title">未完了のToDo</p>
        <ul>
          <div className="list_row">
            <li>todo</li>
            <button>戻す</button>
          </div>
        </ul>
      </div>
    </>
  );
};
