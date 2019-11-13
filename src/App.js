import React, { Component } from 'react';
import './demo.css';
import Result from './components/result'
import Color from './components/color';
import Choose from './components/chonco';
import Reset from './components/reset'
class TimeBox {
  constructor(app) {
    this.element = (
    <div><Result color={app.state.color} font={app.state.font} /></div>);
    this.font = app.state.font;
    this.color = app.state.color;

  }
  
  setFont(font){
    this.font = font;
    this.element = (
      <div><Result  font={font} /></div>);
  }
  setcolor(color)
  { this.color=color;
    this.element=(
      <div><Result color={color}  /></div>
    );

  }
}


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "red",
      font: 15,
      colorpl:[]
    }
    this.chonmau = this.chonmau.bind(this)
    this.upsize = this.upsize.bind(this)
    this.reset = this.reset.bind(this)
  }
pushcpn=()=>{
    let s=this.state.colorpl;
    s.push((new TimeBox(this)));
    this.setState(
      {
        colorpl: s
      }
    )
  }
deletecpn=()=>{
  let p=this.state.colorpl;
  p.pop();
  this.setState(
    {
      colorpl: p
    }
  )
}
reset(a, b) {
    this.setState({
      color: b,
      font: a
    })
  }
  chonmau(h) {
    let s=this.state.colorpl;
    s.forEach(timeBox=>{timeBox.setcolor(h)});
    this.setState({
      color: h,
      colorpl: s
    }
    )
  }
  upsize(g) {
    let s = this.state.colorpl;
    s.forEach(timeBox => {timeBox.setFont(g)});
    this.setState({
      font: g,
      colorpl: s
    })

  }

  render() {
    let timeBoxList = this.state.colorpl.map(timeBox => timeBox.element);

    return (
      <div>
         <div className="container mt" >
             <div className="row">
             <Color color={this.state.color} baccau={this.chonmau} />
             <Choose font={this.state.font} baccau2={this.upsize} />
             <Result color={this.state.color} font={this.state.font} />
             <Reset baccau3={this.reset} />
        </div>
        </div>
        <button type="button" class="btn btn-primary" onClick={this.pushcpn}>add component</button><br/>
        <button type="button" class="btn btn-primary" onClick={this.deletecpn}>delete component</button>
        <p>{timeBoxList}</p>
      </div>
    );
   
  }
}
export default App;