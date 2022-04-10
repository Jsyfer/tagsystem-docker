import React, { Component } from 'react';
import Content from 'components/file/content';
import TagSelector from 'components/tag/tagSelector';

class TagFilter extends Component {
  render() { 
    return (
      <>
        <TagSelector/>
        <Content/>
      </>
    );
  };
}
 
export default TagFilter;