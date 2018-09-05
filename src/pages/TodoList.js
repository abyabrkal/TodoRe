import React, { Component } from 'react'

class TodoList extends Component{
    render(){
        return(
            <div className="todoListMain">
                <div className="header">
                    <form>
                        <input placeholder="enter the task"></input>
                        <button type="submit">add</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default TodoList;