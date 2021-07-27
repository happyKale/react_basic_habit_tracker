import React, { Component } from 'react';
import './app.css';
import Habits from './components/habits';
import Navbar from './components/navbar';

class App extends Component {
  state = {
    habits: [ 
        { id: 1, name: 'Reading', count: 0},
        { id: 2, name: 'Running', count: 0},
        { id: 3, name: 'Coding', count: 0}
    ],
  };

  // 리액트에서는 state를 직접 수정하면 안 된다.
  handleIncrement = (habit) => {
    // const habits = [...this.state.habits];
    // const index = habits.indexOf(habit);
    // habits[index].count++;
    const habits = this.state.habits.map(item => {
      if(item.id === habit.id){
        return { ...habit, count: habit.count+1 };
      } 
      return item;
    });
    this.setState({ habits });
    //키와 밸류의 이름이 같으면 위에 처럼 생략가능!
  };
  handleDecrement = (habit) => {
    const habits = this.state.habits.map(item => {
      if(item.id === habit.id){
        const count = habit.count - 1;
        return { ...habit, count: count < 0 ? 0 : count };
      } 
      return item;
    });
    this.setState({ habits });
  };
  handleDelete = (habit) =>{
      const habits = this.state.habits.filter(item => item.id !== habit.id);
      this.setState({ habits });
  };
  handleAdd = (name) => {
    let habits = [...this.state.habits, {id: Date.now(), name, count: 0}];
    this.setState({habits});
  }
  handleReset = () => {
    const habits = this.state.habits.map(habit => {
      if(habit.count !== 0){
        return {...habit, count:0 };
      }
      return habit;
    });
    this.setState({ habits });
  };

  render() {
    return (
      <>
        <Navbar totalCount={this.state.habits.filter(item => item.count > 0).length}/>
        <Habits 
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          onReset={this.handleReset}
        />
      </>
    );
  }
}

export default App;
