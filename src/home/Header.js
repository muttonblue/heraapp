import React, { Component } from 'react';

class Header extends Component {
  constructor(){
    super();
    this.state = {
      name: "Muttonblue",
      count: 0
    };
  }

  render() {
  
    // setTimeout(()=>{
    //   this.setState({name:"Muttonblue Heraapp"});
    // } , 2000 );
    // setInterval(()=>{
    //   this.setState({count:this.state.count + 1});
    // },3000);


    return (
      <div>
        <p> +++++++++Header+++++++++++ </p>
        <p> {this.state.name} : {this.state.count} </p>
      </div>

    );
  }
}

export default Header;
