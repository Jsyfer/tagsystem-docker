import React, { Component } from 'react';
import axios from 'axios';
import { initialFileTags } from 'redux/fileTagSlice'
import { connect } from 'react-redux';
import * as globalConst from  'common/globalConst'

class FileCard extends Component {
  state = {  } 
  render() { 
    return (
      <div className="col">
        <div className="card card-width text-light bg-dark">
          <img src={"data:image/png;base64," + this.props.thumb} className="card-img-top" alt="" onClick={() => this.viewFileInline()}/>
          <span className="badge bg-light text-dark"></span>
          <div className="card-body">
            <p className="card-text fs-xs">{this.props.children.name}</p>
            <button type="button" className="btn btn-outline-info btn-xs" data-bs-toggle="modal" data-bs-target={"#modal-"+ this.props.children.id} 
            onClick={() => this.getFileTags()}>
              Show detail
            </button>
          </div>
        </div>
      </div>
    );
  }
  // ==== axios below ====
  getFileTags = () => {
    axios
    .get(globalConst.tagSystemDomain + "/filetag/listbyfile?fileId=" + this.props.children.id)
    .then((response) => {
      this.props.initialFileTags({
        fileTagList: response.data,
        tagList: this.props.tagList
      })
    })
    .catch((error) => {
      console.log("Error get tags by file id: " + error);
    });
  }
  viewFileInline = () => {
    const url = globalConst.tagSystemDomain + "/stream/" + this.props.children.id + "/" + encodeURIComponent(this.props.children.name);
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }
}

const mapStateToProps = state => ({
  fileTags: state.fileTags
});
const mapDispatchToProps = () => ({ 
  initialFileTags
});
 
export default connect(
  mapStateToProps,
  mapDispatchToProps()
)(FileCard);