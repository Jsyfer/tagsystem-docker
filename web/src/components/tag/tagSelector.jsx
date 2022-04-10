import React, { Component } from 'react';
import axios from 'axios';
import { addCheckedTag, deleteTag, initialTags } from 'redux/tagSlice'
import { initialFilelist } from 'redux/fileSlice'
import { connect } from 'react-redux';
import * as globalConst from  'common/globalConst'
import Tag from './tag';

class TagSelector extends Component{
  constructor(props){
    super(props)
    this.modeSwitch = null
  }
  render(){
    return (
      <React.Fragment>
      <div className="form-check form-switch">
        <input className="form-check-input" type="checkbox" id="modeSwich" onClick={this.modeSwitchMonitor} defaultChecked ref={c=>{this.modeSwitch = c}}/>
        <label className="form-check-label text-white" htmlFor="modeSwich">tag [and] search</label>
      </div>
      <table className="table table-dark table-striped table-hover">
        <thead>
          <tr>
            <th className="w-20px">catgory</th>
            <th>tags</th>
          </tr>
        </thead>
        <tbody className="tag-select-area">
          {
            Object.keys(this.props.tags.allTags).map((currentGroup) => {
              return (
                <tr key={currentGroup}>
                  <td>{currentGroup}</td>
                  <td>
                    {this.props.tags.allTags[currentGroup].map((currentTag)=>{
                      return (
                        <Tag key={"tag-" + currentTag.id} prefix={""} tagSelectMonitor={this.tagSelectMonitor}>{currentTag}</Tag>
                      );
                    })}
                  </td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
      </React.Fragment>
    );
  };

  tagSelectMonitor = (tagcall) =>{
    this.props.addCheckedTag({checked:tagcall.target.checked,tagId:tagcall.target.id});
    setTimeout(() => {
      this.getAllItem(this.props.tags.checkedTags);
    }, 100);
  };
  modeSwitchMonitor = () =>{
    setTimeout(() => {
      this.getAllItem(this.props.tags.checkedTags);
    }, 100);
  };
  // ==== axios below ====
  componentDidMount(){
    axios
      .get(globalConst.tagSystemDomain + "/tag/all")
      .then((response) => {
        this.props.initialTags(response.data);
      })
      .catch((error) => {
        console.log("Error get all tag: " + error);
      });
    this.getAllItem([]);
  };
  getAllItem = tagList => {
    let switchMode = this.modeSwitch.checked ? "and" : "or";
    const data = { "keyList": tagList, "mode": switchMode };
    axios
      .post(globalConst.tagSystemDomain + "/filetag/listbytag" ,data)
      .then((response) => {
        this.props.initialFilelist(response.data);
      })
      .catch((error) => {
        console.log("Error get file list by Tag: " + error);
      });
  }
}

const mapStateToProps = state => ({
  tags: state.tags
});

const mapDispatchToProps = () => ({ 
  addCheckedTag,
  deleteTag,
  initialTags,
  initialFilelist
});

export default connect(
  mapStateToProps,
  mapDispatchToProps()
)(TagSelector);