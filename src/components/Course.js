import React, { Component } from 'react';
import Lesson from './Lesson';


class Course extends Component {
    constructor(props){
      super(props);
      this.handClickRead=this.handClickRead.bind(this);
      this.registerCourse=this.registerCourse.bind(this);
    }

    handleClick(){
      alert("You are sure Register !");
    }

    handleClickview(content){
      alert(content);
    }

    handClickRead(){
      alert(this.props.name);
    }
    registerCourse(){
      alert(this.refs.userName.value);
    }

 		showButtonView(){
 			const isFree=this.props.free;
 			if(isFree === true){
 				return (
 				<div className="btn-group">
		          <button type="button" onClick={this.handleClick} className="btn btn-danger">Register</button>
		          <button type="button" onClick={() => this.handleClickview("View")} className="btn btn-primary" data-toggle="button" >View</button>
              <button type="button" onClick={this.handClickRead} className="btn btn-sucsess">Read</button>
          		</div>
 					);
 			}
 			else
 				return (
 				<div className="btn-group">
          			<button type="button" onClick={this.handleClick} className="btn btn-primary">Register</button>
                <button type="button" onClick={this.handClickRead} className="btn btn-danger">Read</button>
         		</div>
 					);
 		}
  render() {
    return (
        <div className="col-3">
          <div className="card border-primary mb-3" >
            <div className="card-header">{this.props.name}</div>
            <div className="card-body text-primary">
                  <ul className="list-group">
                  {this.props.children}
                  <b>{this.props.time}</b>
                  <Lesson />
                  <Lesson />
                  <Lesson />
                  <Lesson />
        		  </ul>

            </div>
            <div className="btn-group">{this.showButtonView()}</div>
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <button className="btn btn-outline-secondary" onClick={this.registerCourse} type="button">Button</button>
            </div>
            <input type="text" className="form-control" placeholder aria-label aria-describedby="basic-addon1" ref="userName" />
          </div>
        </div> 
    );
  }
}

export default Course;
