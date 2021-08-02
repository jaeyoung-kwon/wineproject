import React, { Component } from 'react';
import './App.css';
import Example from './Bar';
import Buttons from './Buttons';
import WinePredict from './WinePredict';
import WineList from './WineList';
import HorizontalScroll from './HorizontalScroll';
import Test from './test';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      mode: 'welcome'
    }
  }
  render() {
    var  _article = null;
    if(this.state.mode === 'welcome') {
      _article = <Buttons onChangeMode={function(_mode){
        this.setState({mode:_mode})
      }.bind(this)}></Buttons>
    } else if(this.state.mode === 'predict') {
      _article = <WinePredict></WinePredict>
    } else if(this.state.mode === 'list') {
      _article = <WineList></WineList>
    }
    return (
      <div className="Buttond">
        <Example onChangeMode={function(){
          this.setState({mode:'welcome'});
        }.bind(this)}></Example>
        {_article}
        <Test></Test>
      </div>
    );
  }
}

export default App;
