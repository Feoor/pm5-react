import { Component } from 'react';

class ClassDashboard extends Component {
  state = {
    count: 0,
    theme: 'light',
    user: { name: 'Студент', level: 'junior' },
    taskInput: "",
    tasks: ['Повторить JSX', 'Изучить props']
  };

  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }))
  }

  decrement = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1
    }))
  }

  resetCounter = () => {
    this.setState({
      count: 0,
    })
  }

  toggleTheme = () => {
    this.setState((prevState) => ({
      theme: prevState.theme === 'light' ? 'dark' : 'light',
    }))
  }

  upgradeUser = () => {
    this.setState((prevState) => ({
      user: { ...prevState.user, level: 'middle' },
    }))
  }

  handleTaskInputChange = (e) => {
    this.setState({
      taskInput: e.target.value
    })
  }

  addTask = (task) => {
    if (task.trim().length === 0) return;

    this.setState((prevState) => ({
      taskInput: '',
      tasks: [...prevState.tasks, task.trim()]
    }))
  }

  removeTask = (task) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter(t => t !== task)
    }))
  }

  render() {
    return (
      <div>
        <h2>Панель состояния</h2>
        <p>Счётчик: {this.state.count}</p>
        <p>Тема: {this.state.theme}</p>
        <p>Пользователь: {this.state.user.name} / {this.state.user.level}</p>

        <input
          placeholder="Напишите задачу..."
          value={this.state.taskInput}
          onChange={this.handleTaskInputChange}
        />
        <button onClick={() => {this.addTask(this.state.taskInput)}}>+</button>
        {this.state.tasks.length === 0 && <p>Список задач пуст</p>}
        <ul>
          {this.state.tasks.map((task) => (
            <li key={task}>{task} <button onClick={() => {this.removeTask(task)}}>X</button></li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ClassDashboard;
