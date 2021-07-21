import React, { Component } from "react";
///Todo Input (Github)

export default class TodoInput extends Component {
  render() {
    const { item, handleChange, handleSubmit, editItem } = this.props;
    return (
      <div className="card card-body my-3">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-primary text-white ">
                <i className="fas fa-book" style={{ fontSize: "1.5rem" }}></i>
              </div>
            </div>
            <input
              type="text"
              className="form-control text-capitalize"
              placeholder="Add To-Do Item"
              value={item}
              onChange={handleChange}
            />
          </div>
          <button className="btn col-12 btn-primary mt-3 text-uppercase">
            Add
          </button>
        </form>
      </div>
    );
  }
}
