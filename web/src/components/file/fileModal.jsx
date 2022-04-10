import React, { Component } from 'react';
import FileTagSwitch from 'components/filetag/fileTagSwitch';
import axios from 'axios';
import { connect } from 'react-redux';
import * as globalConst from  'common/globalConst'

class FileModal extends Component {
  state = {  } 
  render() { 
    return (
      <div className="modal fade" id={"modal-" + this.props.children.id} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-fullscreen-xl-down modal-xl">
          <div className="modal-content text-light bg-dark">
            <div className="modal-header">
              <p className="modal-title fs-6" id="staticBackdropLabel">{this.props.children.name}</p>
            </div>
            <div className="modal-body">
            {this.props.children.path}
              <FileTagSwitch groupList={this.props.groupList} fileId={this.props.children.id}></FileTagSwitch>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-outline-light btn-xs" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-outline-info btn-xs" onClick={() => this.updateFileTag()}>Apply</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  // ==== axios below ====
  updateFileTag = () => {
    const data = { 
      "addList": this.props.fileTags.tagSelectL, 
      "removeList": this.props.fileTags.tagSelectR, 
      "fileId": this.props.children.id
    };
    axios
      .post(globalConst.tagSystemDomain + "/filetag/update" ,data)
      .then((response) => {
        console.log("update file tags complete: " + response);
      })
      .catch((error) => {
        console.log("update file tags failed: " + error);
      });
  }
}

const mapStateToProps = state => ({
  fileTags: state.fileTags
});
const mapDispatchToProps = () => ({ 
  
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FileModal);