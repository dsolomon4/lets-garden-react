import React from "react";


function Cards (props){
    return(
        <div>
        <div className="card">
         <div className="card-body">
         <h3 id="card-title" className="card-title">{props.name}</h3>
         <br/>
         <p className="card-text">{props.description}</p> 
         <p className="card-text">{props.watering}</p> 
         <p className="card-text">Stay away from {props.pests}</p>
         <span >
        <button className="add btn btn-outline-dark" {...props} > Add to your Garden</button>
        <br/>
        <br/>
        <button className="swap btn btn-outline-dark" {...props} > Request Swap</button>
      </span>
         </div>
  </div>
  </div>



 

    )
}

export default Cards;


