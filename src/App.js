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
      mode: 'predict'
    }
  }
  render() {
    var _article1, _article2 = null;
    if(this.state.mode === 'welcome') {
      _article1 = <HorizontalScroll></HorizontalScroll>
      _article2 = <Buttons onChangeMode={function(_mode){
        this.setState({mode:_mode})
      }.bind(this)}></Buttons>
    } else if(this.state.mode === 'predict') {
      _article2 = <WinePredict></WinePredict>
    } else if(this.state.mode === 'list') {
      _article2 = <WineList></WineList>
    }
    return (
      <div className="Buttond">
        <Example onChangeMode={function(){
          this.setState({mode:'welcome'});
        }.bind(this)}></Example>
        {_article1}
        {_article2}
      </div>
    );
  }
}

export default App;
