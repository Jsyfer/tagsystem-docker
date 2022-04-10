import React, { Component } from 'react';
import axios from 'axios';
import * as globalConst from  'common/globalConst'

class Settings extends Component {
  state = { inputValue: '' } 
  render() { 
    return (
      <div className="input-group mb-3 container-fluid pt-3">
        <input type="text" className="form-control bg-secondary text-light" placeholder="file path" 
        aria-label="file path" aria-describedby="button-addon2" onChange={this.filePathMonitor}></input>
        <button className="btn btn-outline-info" type="button" id="button-addon2" onClick={() => this.multiAdd()}>Add</button>
        <button className="btn btn-outline-info" type="button" onClick={() => this.addThumb()}>Add Thumb</button>
      </div>
    );
  }
  filePathMonitor = (input) =>{
    this.setState({inputValue: input.target.value})
  };
  // ==== axios below ====
  multiAdd = () => {
    const data = {"path": this.state.inputValue};
    axios
      .post(globalConst.tagSystemDomain + "/file/multiadd" ,data)
      .then((response) => {
        console.log("Success add new file: " + response);
      })
      .catch((error) => {
        console.log("Error add new file: " + error);
      });
  };
  addThumb = () => {
    axios
      .get(globalConst.tagSystemDomain + "/file/addthumb")
      .then((response) => {
        console.log("Success add thumb file: " + response);
      })
      .catch((error) => {
        console.log("Error add thumb: " + error);
      });
  };
}

export default Settings;