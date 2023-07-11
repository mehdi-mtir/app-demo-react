import Comment from "./components/Comment";
import Card from "./components/card";
import { useState } from "react";

function App(){
  const [comments, setComments] = useState([
    {
      titre :"Elliot Fu",
      photo:"https://semantic-ui.com/images/avatar/large/elliot.jpg",
      description:"Hey guys, I hope this example comment is helping you read this documentation.",
      approuve:false
    },
    {
      titre :"Jenny Hess",
      photo:"https://semantic-ui.com/images/avatar/large/jenny.jpg",
      description:"Jenny wants to add you to the group best friends",
      approuve:false
    },
    {
      titre :"Stevie Feliciano",
      photo:"https://semantic-ui.com/images/avatar/small/stevie.jpg",
      description:"Hey guys, I hope this example comment is helping you read this documentation.",
      approuve:false
    }
  ]);

  const deleteComment = (titre)=>{
    setComments(comments.filter(comment=>comment.titre !== titre));
    console.log(comments);
  }

  const approuveComment = (titre)=>{
    const commentsUpdated = comments.map(comment =>{
      if(comment.titre === titre)
        return {...comment, approuve : true}
      else
        return comment
    })
    setComments(commentsUpdated);
  }

  //approuveComment("Stevie Feliciano");


  return <div>
    <h1>Démonstration Composant et interactions</h1>
    {
      comments.map(
        (comment, index)=>{
        return (

        <Card key={index}
        refDeleteComment={deleteComment}
        refApprouveComment={approuveComment}>
          <Comment
            key={comment.titre}
            titre={comment.titre}
            photo={comment.photo}
            approuve={comment.approuve}
            description={comment.description}
          />
        </Card>

        )
        }
      )
    }

  </div>
}

export default App;
