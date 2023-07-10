
function Comment(props){
  //console.log(JSON.stringify(props));
  return (
  <div className="ui comments">
    <div className="comment">
      <a className="avatar">
        <img src={props.photo}/>
      </a>
      <div className="content">
        <a className="author">{props.titre}</a>
        <div className="text">
        {props.description}
      </div>
      </div>
    </div>
  </div>
);
}

export default Comment;
