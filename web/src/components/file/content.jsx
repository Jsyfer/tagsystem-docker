import React, { Component } from 'react';
import FileCard from './fileCard';
import FileModal from './fileModal';
import { initialTags } from 'redux/tagSlice'
import { initialFilelist } from 'redux/fileSlice'
import { connect } from 'react-redux';

class Content extends Component {
  state = {  } 
  render() { 
    return (
      <>
      <div className="row row-cols-auto g-4">
      {
        this.props.files.fileList.map(file => {
          if(file !== null){
            const thumb = file.thumb === null ? this.props.files.defaultThumb : file.thumb;
            return(
              <FileCard key={file.id} thumb={thumb} tagList={this.props.tags.tagList} getFileTags={this.getFileTags}>{file}</FileCard>
            );
          }else{
            return ""
          }
        })
      }
    </div>
    {
      this.props.files.fileList.map(file => {
        if(file !== null){
          return(
            <FileModal key={file.id} groupList={this.props.tags.groupList}>{file}</FileModal>
          );
        }else{
          return ""
        }
      })
    }
  </>
    )
  };
}
const mapStateToProps = state => ({
  tags: state.tags,
  files: state.files
});

const mapDispatchToProps = () => ({ 
  initialTags,
  initialFilelist
});
 
export default connect(
  mapStateToProps,
  mapDispatchToProps()
)(Content);