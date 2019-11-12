import React from "react";
import { connect } from "react-redux";

import "./App.css";
import ToDo from "./ToDo";
import { deleteItem, completeItem } from "./action/itemsAction";

function App(props) {
  return (
    
      <div className="App">
        <ToDo />
        {props.items.map(item => (
          <div key={item.id} style={{ display: "flex", alignItems: "center" }} className="items">
             <button onClick={() => props.complete(item.id)} className="btn-complete">{item.completed ? "UNDO" : "COMPLETED"}</button>
             {/* <button onClick={() => props.delete(item.id)} className="btn-delete">DELETE</button> */}
             <img className="img" src="https://img.icons8.com/material/50/000000/trash.png" onClick={() => props.delete(item.id)}></img>
           
            <h2
              style={{ textDecoration: item.completed ? "line-through" : "none" }}
              className="item"
            >
              {item.saisi}
            </h2>
           
          </div>
        ))}
      </div>
    
  );
}
const mapDispatchToProps = dispatch => {
  return {
    delete: id => dispatch(deleteItem(id)),
    complete: id => dispatch(completeItem(id))
  };
};

const mapStateToProps = state => {
  return {
    items: state.item
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
