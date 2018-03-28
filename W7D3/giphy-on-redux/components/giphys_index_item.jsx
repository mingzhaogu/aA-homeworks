import React from 'react';

const GiphysIndexItem = ({giphy}) => {
  console.log(giphy)
  return (
    <li><img src={giphy.images.fixed_height.url}></img></li>
  )
}

export default GiphysIndexItem;
