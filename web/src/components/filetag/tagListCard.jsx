import React, { Component } from 'react';
import TagGroupDropdownList from 'components/tag/tagGroupDropdownList';
import Tag from '../tag/tag';
import { updateTagSelect } from 'redux/fileTagSlice'
import { connect } from 'react-redux';

class TagListCard extends Component {
  state = {  } 
  render() { 
    return (
      <div className="card text-light bg-secondary mb-3">
        <div className="card-header"><TagGroupDropdownList keyPrefix={this.props.dropDownListKey} value={this.props.groupList}></TagGroupDropdownList></div>
        <div className="card-body">
          <p className="card-text">
            {
              this.props.tagList.map(currentTag => {
                return (
                  <Tag key={this.props.dropDownListKey + "tagForFile" + currentTag.id} prefix={this.props.dropDownListKey + "tagForFile"} tagSelectMonitor={this.tagSelectMonitor}>{currentTag}</Tag>
                )
              })
            }
          </p>
        </div>
      </div>
    );
  }

  tagSelectMonitor = (tagcall) =>{
    this.props.updateTagSelect({
      checked: tagcall.target.checked,
      tagId: tagcall.target.id.substring(tagcall.target.id.indexOf('tagForFile')+14),
      listIdentifier: this.props.listIdentifier
    });
  };
}

const mapStateToProps = state => ({
  fileTags: state.fileTags
});
const mapDispatchToProps = () => ({ 
  updateTagSelect
});

export default connect(
  mapStateToProps,
  mapDispatchToProps()
)(TagListCard);