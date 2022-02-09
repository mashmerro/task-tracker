// import React from 'react';  // required if working with a class comp, not req with functional comp
import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react';   // React hook to use state inside of a function

const App = () => {
  /** Top level to reuse in other components (global variable) **/
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true
    },
    {
        id: 2,
        text: 'Meeting at School',
        day: 'Feb 6th at 1:30pm',
        reminder: true
    },
    {
        id: 3,
        text: 'Food Shopping',
        day: 'Feb 5th at 2:30pm',
        reminder: false
    }
  ])

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id)); // setTasks to deal with immutable state
  }

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

/** Class Component **/
// class App extends React.Component {
//   render() {
//     return <h1>Hello from a class</h1>;
//   }
// }

export default App;
