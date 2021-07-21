import React, { Component } from "react";
import TodoItem from "./TodoItem";
import Item from "./TodoItem";
export default class TodoList extends Component {
  render() {
    const { items, clearList, handleDelete, handleEdit } = this.props;
    return (
      <ul className="list-group my-5">
        <h3 className="text-capitalize text-center">To-Do List</h3>
        {items.length === 0 ? (
          <h4 className="text-danger text-center" style={{ fontSize: "2rem" }}>
            Empty List.......!
          </h4>
        ) : (
          ""
        )}
        {items.map(item => {
          return (
            <TodoItem
              key={item.id}
              title={item.title}
              handleDelete={() => {
                handleDelete(item.id);
              }}
              handleEdit={() => {
                handleEdit(item.id);
              }}
            ></TodoItem>
          );
        })}

        <button
          style={{ transition: "all 0.5s" }}
          style={
            items.length === 0
              ? { visibility: "hidden" }
              : { visibility: "visible" }
          }
          className="btn btn-danger col-12 text-uppercase mt-5"
          onClick={clearList}
        >
          Clear List
        </button>
      </ul>
    );
  }
}
