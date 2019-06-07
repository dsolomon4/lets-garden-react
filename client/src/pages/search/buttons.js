import React from "react";

export function aAddItem(props) {
    return (
      <div className="form-group">
        <button className="add btn btn-outline-dark" {...props} > Add to your List</button>
      </div>
    );
  }
  
  export function RequestIem(props) {
    return (
      <div className="form-group">
        <button className="swap btn btn-outline-dark" {...props} > Request Swap</button>
      </div>
    );
  }