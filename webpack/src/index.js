import React from "react";
import ReactDOM from "react-dom";
// import './index.scss'
import Scss from 'Scss/index.scss'
class MainApp extends React.Component {
  render() {
    fetch('/weatherApi?city=上海')
    return (
      <div className={Scss.box}>
        <h1>Hello World</h1>
      </div>
    );
  }
}
// const div=document.createElement('div');
// document.body.appendChild(div);
ReactDOM.render(<MainApp />, document.getElementById('app'))