import React, { Component } from 'react';
import $ from 'jquery';
import Header from './Compoments/Header';
import Footer from './Compoments/Footer';
import About from './Compoments/About';
import Resume from './Compoments/Resume';
// import Portfolio from './Compoments/Portfolio';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {}
    };


  }

  getResumeData(){
    $.ajax({
      url:'/resumeData.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({resumeData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getResumeData();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main}/>
        <About data={this.state.resumeData.main}/>
        <Resume data={this.state.resumeData.resume}/>
        {/* <Portfolio data={this.state.resumeData.portfolio}/> */}
        <Footer data={this.state.resumeData.main}/>
      </div>
    );
  }
}

export default App;