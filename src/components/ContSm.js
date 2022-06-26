import React from 'react';
import'./ContSm.css'

function ContSm({thumbnail,author,content}) {
  return (
  
<div className="card">
<div className="container">
  <img src={thumbnail} alt="Avatar" className="image" />
  <div className="middle">
    <div className="text">learn more</div>
  </div>
</div>
  <div className="cnt">
    <h4><b>{author}</b></h4>
    <p>{content}</p>
  </div>
</div>
    
  )
}

export default ContSm