import React, { Component } from 'react';
import axios from 'axios';
import { initialTags } from 'redux/tagSlice'
import { connect } from 'react-redux';
import * as globalConst from  'common/globalConst'
import TagGroupDropdownList from './tag/tagGroupDropdownList';
import TagRecord from './tag/tagRecord';

class TagManager extends Component {
  state = {
    tagName: '',
    tagGroup: ''
  }
  
  render() { 
    return (
      <div className='container-fluid pt-3'>
        <table className="table table-dark table-striped table-hover">
          <thead>
            <tr>
              <th className="w-20px">id</th>
              <th className="w-25">name</th>
              <th className="w-25">group</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody className="tag-select-area">
            <tr>
              <td></td>
              <td><input className="form-control form-control-sm bg-secondary text-light" type="text" onChange={this.tagNameValueMonitor}/></td>
              <td><TagGroupDropdownList value={this.props.tags.groupList} handler={this.tagGroupValueMonitor}/></td>
              <td><button type="button" className="btn btn-outline-info btn-xs" onClick={() => this.newTagApply()}>new</button></td>
            </tr>
            {
              this.props.tags.tagList.map(currentTag => {
                return (<TagRecord key={currentTag.name} value={this.props.tags.groupList} onUpdate={this.getAllTags}>{currentTag}</TagRecord>)
              })
            }
          </tbody>
        </table>
      </div>
    );
  };
  tagNameValueMonitor = input => {
    this.setState({tagName: input.target.value});
  }
  tagGroupValueMonitor = input => {
    this.setState({tagGroup: input.target.value});
  };
  componentDidMount(){
    this.getAllTags();
  };
  // ==== axios below ====
  getAllTags =() => {
    axios
    .get(globalConst.tagSystemDomain + "/tag/all")
    .then((response) => {
      this.props.initialTags(response.data);
    })
    .catch((error) => {
      console.log("Error get all tag: " + error);
    });
  };
  newTagApply = () => {
    const data = { "id": "", "name": this.state.tagName, "group":this.state.tagGroup};
    axios
      .post(globalConst.tagSystemDomain + "/tag/add" ,data)
      .then(() => {
        this.getAllTags();
      })
      .catch((error) => {
        console.log("Error add new tag: " + error);
      });
  };
}

const mapStateToProps = state => ({
  tags: state.tags
});

const mapDispatchToProps = () => ({ 
  initialTags
});
export default connect(
  mapStateToProps,
  mapDispatchToProps()
)(TagManager);