import React, { Component } from 'react';
import Example from './main/Bar';
import Buttons from './main/Buttons';
import WinePredict from './predict/WinePredict';
import WineList from './list/WineList';

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
      </div>
    );
  }
}

export default App;
