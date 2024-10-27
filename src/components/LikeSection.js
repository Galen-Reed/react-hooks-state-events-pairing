import React from "react";

function LikeSection({ title, views, createdAt, likeData, dislikeData, likeButton, dislikeButton, hideButton }) {

    return (
        <div>
            <h1>{title}/</h1>
            <p>{views} Views | Uploaded: {createdAt}</p>
            <div>
                <button onClick={likeButton}>{likeData}👍</button>
                <button onClick={dislikeButton}>{dislikeData}👎</button>
            </div>
            <button onClick={hideButton}>Hide Comments</button>
        </div>
    )
}

export default LikeSection;


// 👍
// 👎