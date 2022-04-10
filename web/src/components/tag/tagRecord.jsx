import React, { Component } from 'react';
import TagGroupDropdownList from './tagGroupDropdownList';
import axios from 'axios';
import * as globalConst from  'common/globalConst'

class TagRecord extends Component {
  state = { 
    editModeFlg: false,
    tagId: this.props.children.id,
    tagName: this.props.children.name,
    tagGroup: this.props.children.group,
  };
  render() { 
      if(this.state.editModeFlg){
        return (
          <tr>
            <td>{this.props.children.id}</td>
            <td><input className="form-control form-control-sm bg-secondary text-light" type="text" defaultValue={this.props.children.name} onChange={this.tagNameValueMonitor}/></td>
            <td><TagGroupDropdownList value={this.props.value} handler={this.tagGroupValueMonitor}>{this.props.children.group}</TagGroupDropdownList></td>
            <td>
              <button type="button" className="btn btn-outline-success btn-xs" onClick={() => this.tagEditApply(false)}>apply</button>
              <button type="button" className="btn btn-outline-light btn-xs" onClick={() => this.handleClick(false)}>cancel</button>
            </td>
          </tr>
        );
      }else {
        return (
          <tr>
            <td>{this.props.children.id}</td>
            <td>{this.props.children.name}</td>
            <td>{this.props.children.group}</td>
            <td>
              <button type="button" className="btn btn-outline-warning btn-xs" onClick={() => this.handleClick(true)}>edit</button>
              <button type="button" className="btn btn-outline-danger btn-xs" onClick={() => this.tagDeleteApply()}>delete</button>
            </td>
          </tr>
        );
      }
  };
  handleClick=(flg) => {
    if(flg){
      this.setState({editModeFlg: true})
    }else {
      this.setState({editModeFlg: false})
    }
  };
  tagNameValueMonitor = input => {
    this.setState({tagName: input.target.value});
  }
  tagGroupValueMonitor = input => {
    this.setState({tagGroup: input.target.value});
  };
  // ==== axios below ====
  tagEditApply = (editModeFlg) => {
    const data = { "id": this.state.tagId, "name": this.state.tagName, "group":this.state.tagGroup};
    axios
      .post(globalConst.tagSystemDomain + "/tag/editbyid" ,data)
      .then(() => {
        this.props.onUpdate();
        this.handleClick(editModeFlg);
      })
      .catch((error) => {
        console.log("Error update tag: " + error);
      });
  };
  tagDeleteApply = () => {
    const data = { "id": this.state.tagId, "name": this.state.tagName, "group":this.state.tagGroup};
    axios
      .post(globalConst.tagSystemDomain + "/tag/deletebyid" , data)
      .then(() => {
        this.props.onUpdate();
      })
      .catch((error) => {
        console.log("Error delete tag: " + error);
      });
  };
}
export default TagRecord;