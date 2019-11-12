import React, { Component } from 'react'

import { connect } from 'react-redux';
import { addItem } from './action/itemsAction'



class ToDo extends Component {
    constructor(props){
        super(props);
        this.state={
            saisi: ''
        }

    }
    handleChange = e => {
        this.setState({ saisi: e.target.value });
    }
    add = () => {
        this.props.newItem({...this.state, id: Math.round(Math.random() * 1000), completed: false})
    }

    render() {
        return (
            <div className="nav">
                <h1 className="title">TO-DO-APP</h1>
                <h6 className="add"><strong>Add New To-Do</strong></h6>
                <input type="text" className="input" placeholder="Enter new item" onChange={this.handleChange}></input>
                <button className="btn-add" onClick={this.add}>Add</button>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return{
        newItem: x => dispatch(addItem(x))
    }
}

export default connect(null, mapDispatchToProps)(ToDo)
