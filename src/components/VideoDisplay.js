import React from "react";

function VideoDisplay({ video }) {

    return (
        <div>
            <iframe
        width="919"
        height="525"
        src={video}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
        </div>
    )
}

export default VideoDisplay;