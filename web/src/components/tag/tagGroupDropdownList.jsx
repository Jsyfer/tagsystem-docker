import React, { Component } from 'react';

class TagGroupDropdownList extends Component {
  render() {  
    return (
      <>
      <input className="form-control form-control-sm bg-secondary text-light" list="datalistOptions" id="exampleDataList" defaultValue={this.props.children} onChange={this.props.handler}/>
      <datalist id="datalistOptions">
        {
          this.props.value.map(groupName => {
            return (
              <option key={this.props.keyPrefix + groupName} value={groupName}/>
            );
          })
        }
      </datalist>
      </>
    );
  };
}
 
export default TagGroupDropdownList;