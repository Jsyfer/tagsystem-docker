import React, { Component } from 'react';
import TagFilter from 'components/tag/tagFilter';
import axios from 'axios';
import * as globalConst from  'common/globalConst'
import { connect } from 'react-redux';
import { initialDefaultThumbnail } from 'redux/fileSlice'

class SearchView extends Component {
  render() { 
    return (
      <div className="container-fluid pt-2">
        <TagFilter />
      </div>
    );
  };

  componentDidMount(){
    axios
      .get(globalConst.tagSystemDomain + "/image/thumbnail")
      .then((response) => {
        this.props.initialDefaultThumbnail(response.data);
      })
      .catch((error) => {
        console.log("Error get default thumbnail: " + error);
      });
  }
}
const mapStateToProps = state => ({
  files: state.files
});
const mapDispatchToProps = () => ({ 
  initialDefaultThumbnail
});
export default connect(
  mapStateToProps,
  mapDispatchToProps()
)(SearchView);