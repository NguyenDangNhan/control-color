import React, { Component } from 'react';
import './demo.css';
import Result from './components/result'
import Color from './components/color';
import Choose from './components/choosesize';
import Reset from './components/reset';
class App extends Component {
  render() {
    return (
      <div>
         <div className="container mt" >
             <div className="row">
             <Color/>
             <Choose/>
             <Result/>
             <Reset/>
        </div>
        </div>
      </div>
    );
   
  }
}

export default App;