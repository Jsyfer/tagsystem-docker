import React, { Component } from 'react';
import TagListCard from './tagListCard';
import { moveBetweenList } from 'redux/fileTagSlice'
import { connect } from 'react-redux';

class FileTagSwitch extends Component {
  state = {  }
  render() { 
    return (
      <div className="row">
        <div className="col">
          <TagListCard tagList={this.props.fileTags.tagListL} groupList={this.props.groupList} dropDownListKey={this.props.fileId + 'L'} listIdentifier='L'></TagListCard>
        </div>
        <div className="col-auto d-flex align-items-center">
          <div className="btn-group-vertical btn-group-sm">
          <button type="button" className="btn btn-outline-info" onClick={()=> this.props.moveBetweenList('L')}>&#62;&#62;</button>
          <button type="button" className="btn btn-outline-info" onClick={()=> this.props.moveBetweenList('R')}>&#60;&#60;</button>
          </div>
        </div>
        <div className="col">
          <TagListCard tagList={this.props.fileTags.tagListR} groupList={[]} dropDownListKey={this.props.fileId + 'R'} listIdentifier='R'></TagListCard>
        </div>
      </div>
    );
  };
}

const mapStateToProps = state => ({
  fileTags: state.fileTags
});
const mapDispatchToProps = () => ({ 
  moveBetweenList
});
 
export default connect(
  mapStateToProps,
  mapDispatchToProps()
)(FileTagSwitch);