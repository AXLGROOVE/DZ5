import React from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import './app.css';
import ToDoAdd from "../toDoAdd";
import {isElementType} from "@testing-library/user-event/dist/utils";

class App extends React.Component {
    state = {
        todos: [
            {id: 1, label: 'Drink wine', important: false, done: false},
            {id: 3, label: 'Have a dinner', important: false, done: false},
            {id: 2, label: 'Make Awesome', important: true, done: false},
        ],
        filter: 'all',
        searchText: ''
    }

    onDelete = (id) => {
        this.setState((oldState) => {
            const new_todos = oldState.todos.filter((todo) => todo.id != id)
            return {todos: new_todos}
        })
    }


    onImportant = (id) => {
        this.setState((oldState) => {
            const new_todos = oldState.todos.map((todo) => {
                if (todo.id == id) {
                    return {...todo, important: !todo.important}
                } else {
                    return {...todo}
                }
            })
            return {todos: new_todos}
        })
    }

    onDone = (id) => {
        this.setState((oldState) => {
            const new_todos = oldState.todos.map((todo) => {
                if (todo.id == id) {
                    return {...todo, done: !todo.done}
                } else {
                    return {...todo}
                }
            })
            return {todos: new_todos}
        })
    }

    onSearch = (text) => {
        this.setState({
            searchText: text
        })
    }

    onSearchFilter = (filterText, todos) => {
        const filteredToDos = todos.filter((todo) => todo.label.includes(filterText))
        return filteredToDos;
    }

    onAddNewToDo = (text) => {
        this.setState((oldState) => {

            let itemId = oldState.todos.map(item => item.id)

            if (itemId.length === 0) {
                itemId = []
            }

            let newId = itemId.length + 1

            const newToDo = {
                id: newId + 1,
                label: text,
                important: false,
                done: false
            }

            return {todos: [...oldState.todos, newToDo]}
        })
    }

    onFilter = (status) => {
        this.setState({
            filter: status
        })
    }
    onFilterAll = (todos, status) => {
        return todos
    }

    onFilterActive = (todos, status) => {
        if (status === 'active') {
            return todos.filter((item) => item.done === false)
        }
    }

    onFilterDone = (todos, status) => {
        if (status === 'done') {
            return todos.filter((item) => item.done === true)
        }
    }

    render() {

        const filterToDos = this.onSearchFilter(this.state.searchText, this.state.todos)

        return (
            <div className="todo-app">
                <AppHeader toDo={2} Done={1}/>
                <div className="top-panel d-flex">
                    <SearchPanel onSearch={this.onSearch}/>
                    < ItemStatusFilter onFilter={this.onFilter}
                                        onFilterDone={this.onFilterDone}
                                        onFilterAll={this.onFilterAll}
                                        onFilterActive={this.onFilterActive}
                    />
                </div>

                <TodoList todos={filterToDos}
                          onDelete={this.onDelete}
                          onImportant={this.onImportant}
                          onDone={this.onDone}
                />
                <ToDoAdd onAddNewToDo={this.onAddNewToDo}/>
            </div>
        );
    };
}


export default App;