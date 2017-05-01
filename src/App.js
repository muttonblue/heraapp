import React, { Component } from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      data:[],
      message:"UnLike",
      type:""
    };
    this.changeMessage = this.changeMessage.bind(this);
    this.insertData = this.insertData.bind(this);
  }// constructor


  changeMessage() {
    this.setState({message:"Link"});
  }

  insertData() {
    var item = "React";
    var myArray = this.state.data;
    myArray.push(item);
    this.setState({data:myArray});
  }

  onChange(event){
    this.setState({type:event.target.value})
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Heraapp</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.changeMessage}>{this.state.message}</button>
        <h1>{this.state.data}</h1>
        <button onClick={this.insertData}>Insert</button> <br/>
        <input type="text" onChange={this.onChange.bind(this)}></input>
        <h3>Welcome {this.state.type} </h3>
        <Footer name = "xxx" />
      </div>
    );
  }
}
export default App;
