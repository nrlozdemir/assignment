import React, { Component } from 'react';
import * as ReactDOM from 'react-dom';
import classnames from 'classnames';
import style from './App.scss'
import StadiumChart from './StadiumChart'

const pacingCardContainer = classnames(
  'shadow-1 col-12 mt-72',
  style.pacingCardContainer
)
class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
    };
  }

  render() {
    return (
      <div className="pacingCardContainer">
        <div className="pacingCardInner">
          <div className="pacingCardInnerItem">
            <StadiumChart />
          </div>
        </div>
      </div>
    );
  }
}


export default App;