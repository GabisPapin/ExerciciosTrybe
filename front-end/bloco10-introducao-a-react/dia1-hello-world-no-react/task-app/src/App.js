import './App.css';
import React from 'react';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const arrayTasks = ['acordar', 'alongar', 'tomar café', 'tomar banho', 'conversar com a mamis','estudar'];

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <ol>{ arrayTasks.map((task) => Task(task)) }</ol>
      </div>
    );
  }
}


export default App;
