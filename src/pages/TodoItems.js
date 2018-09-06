import React, { Component } from 'react'
import './index.css';


class TodoItems extends Component {
    constructor(props){
        super(props);

        this.createTasks = this.createTasks.bind(this);
    }
    
    createTasks(item){
        return <li onClick={ () => this.deleteTask(item.key) }
                    key={item.key}>{item.text}</li>
    }

    deleteTask(key){
        this.props.deleteTask(key);
    }

    render(){
        var todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.createTasks);

        return(
            <ul className="theList">
                {listItems}
            </ul>
        );
    }
};

export default TodoItems;