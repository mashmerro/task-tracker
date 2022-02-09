//import React from 'react';  // required if working with a class comp, not req with functional comp
import './App.css';
import Header from './components/Header.js';

function App() {
  return (
    <div className="container">
      <Header />
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
