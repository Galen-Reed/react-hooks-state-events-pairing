import React, { useState } from "react";
import video from "../data/video.js";
import CommentSection from "./CommentSection.js";
import LikeSection from "./LikeSection.js";
import VideoDisplay from "./VideoDisplay.js";


function App() {

  const [commentData, setCommentData] = useState(video.comments);
  const [likeData, setLikeData] = useState(video.upvotes);
  const [dislikeData, setDislikeData] = useState(video.downvotes);
  const [showComments, setShowComments] = useState(true);

  function handleLikeButton() {
    setLikeData(likeData + 1);
  }
  
  function handleDislikeButton() {
    setDislikeData(dislikeData + 1);
  }

  function handleHideButton() {
    setShowComments(!showComments);
    console.log("hide comments")
  }

  return (
    <div className="App">
      <VideoDisplay video={video.embedUrl}/>
      <LikeSection 
        {...video} 
        likeData={likeData} 
        dislikeData={dislikeData} 
        dislikeButton={handleDislikeButton} 
        likeButton={handleLikeButton}
        hideButton={handleHideButton}
      />
      { showComments && <CommentSection comments={commentData}/> }
    </div>
  );
}

export default App;


