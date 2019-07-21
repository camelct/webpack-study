'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import logo from './images/1.png';
import './search.less'

class Search extends React.Component {
  render() {
    return <div className="hello-text">
      Hello World !!
      <img src={logo}/>
    </div>;
  }
}

ReactDOM.render(
  <Search />,
  document.getElementById('root')
)
