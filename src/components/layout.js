import React from "react";
import Header from "./header"
import Footer from "./footer"

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Welcome",
    };
  }

  

  render() {
    return (
      <div>
    <Header/>
   {this.props.children}
    <Footer/>        
      </div>
    );
  }
}
