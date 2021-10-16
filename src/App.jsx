import React from "react";
import "./styles.css";

export const App = () => {
  return (
    <>
      <div>
        <input placeholder="ToDo" />
        <button>追加</button>
      </div>

      <div>
        <p>未完了のToDo</p>
        <ul>
          <div>
            <li>todo</li>
            <button>完了</button>
            <button>削除</button>
          </div>
        </ul>
      </div>

      <div>
        <p>未完了のToDo</p>
        <ul>
          <div>
            <li>todo</li>
            <button>戻す</button>
          </div>
        </ul>
      </div>
    </>
  );
};
