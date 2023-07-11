import { useState } from "react";

function Card(props){
  return (
    <div className="ui cards">
  <div className="card">
    <div className="content">
      {props.children}
    </div>
    {
    (!props.children.props.approuve)?
      <div className="extra content">
        <div className="ui two buttons">
          <div className="ui basic green button"
          onClick={
            ()=>{
              props.refApprouveComment(props.children.props.titre);
            }
          }
          >Approve</div>
          <div
            className="ui basic red button"

            onClick={
              ()=>{
                if(!props.children.props.approuve)
                  props.refDeleteComment(props.children.props.titre)
              }
            }
            >Decline</div>
        </div>
      </div>
    :""}
  </div>
  </div>
  );
}

export default Card;
