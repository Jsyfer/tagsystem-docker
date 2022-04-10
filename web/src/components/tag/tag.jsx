import React, { Component } from 'react';

class Tag extends Component {
  state = {  } 
  render() { 
    return (
      <span className="tag-wrap" key={this.props.prefix + "tag-" + this.props.children.id}>
        <input onClick={this.props.tagSelectMonitor} type="checkbox" className="btn-check tag-check-btn" id={this.props.prefix + "tag-" + this.props.children.id} autoComplete="off"/>
        <label className="btn btn-outline-info btn-xs tag-check-label" htmlFor={this.props.prefix + "tag-" + this.props.children.id}>{this.props.children.name}</label>
      </span>
    );
  }
}
 
export default Tag;