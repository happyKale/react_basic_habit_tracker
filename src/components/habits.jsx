import React, { Component } from 'react';
import Habit from './habit';
import InputText from './inputText';

class Habits extends Component {
    // 리액트에서는 state를 직접 수정하면 안 된다.
    handleIncrement = (habit) => {
        this.props.onIncrement(habit);
    };
    handleDecrement = (habit) => {
        this.props.onDecrement(habit);
    };
    handleDelete = (habit) =>{
        this.props.onDelete(habit);
    };
    handleAdd = name => {
        this.props.onAdd(name);
    };
    handleReset = () => {
        this.props.onReset();
    }

    render() {
        return (
            <>
                <InputText onAdd={this.handleAdd}/>
                <ul>
                    {this.props.habits.map(habit => (
                        <Habit 
                            key={habit.id} 
                            habit={habit} 
                            onIncrement={this.handleIncrement}
                            onDecrement={this.handleDecrement}
                            onDelete={this.handleDelete}
                        />
                    ))}  
                </ul>
                <button className="btn-reset" onClick={this.props.onReset}>
                    Reset All
                </button>
            </>
        );
    }
}

export default Habits;