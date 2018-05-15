import React, { Component } from 'react';
// import logo from './logo.svg';
import Course from './components/Course';

import './App.css';

class App extends Component {
  render() {
    const items=[
        {
          name: 'React JS',
          time: '30h',
          free: false,
          desc: 'ABCDEFGHIKLM' 
        },
        {
          name: 'Angular JS',
          time: '30h',
          free: true
           
        },
        {
          name: 'Node JS',
          time: '30h',
          free: false,
          desc: 'ABCDEFGHIKLM' 
        },
        {
          name: 'Javascript',
          time: '30h',
          free: true
           
        }
    ];
    const listCourse = items.map((item,index) =>
          <Course key={index} name={item.name} time={item.time} free = {item.free} >{item.desc}</Course>
      );

    return (
      <div className="row">
          {listCourse}
      </div>

    );
  }
}

export default App;
