import React from "react";

class ToDoAdd extends React.Component {
    state = {text: ''}

    addToDo = (event) => {
        event.preventDefault();
        this.props.onAddNewToDo(this.state.text)
    }

    render() {
        return (
        <form onSubmit={this.addToDo}>
            <input onChange={(event) => this.setState({text : event.target.value})} type='text'/>
            <input type='submit' value='submit'/>
        </form>
        )
    }
}

export default ToDoAdd;