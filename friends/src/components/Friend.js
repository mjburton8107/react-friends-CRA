import React, { Component } from 'react';

class Friend extends Component {
  constructor (props) {
    super(props)
  }
  render(){
    return(
      <li className='friend'>
      	<img className="profile-pic" src={ this.props.pictureUrl } />

      		<h3>{ this.props.name }</h3>

      		<div className="location">
      			
      		</div>

      		<div className="status">
      			Status: { this.props.status }
      		</div>

      		<div className="num-friends">
      			Friends: { this.props.friendCount }
      		</div>
      </li>
    );
  }
}

export default Friend;
