import React from "react";
import "./Video.css";
import PlayVideo from "../../Components/PlayVideo/PlayVideo";
import Recommanded from "../../Components/Recommended/Recommanded";
import { useParams } from "react-router-dom";

const Video = () => {
  const { videoId, categoryId } = useParams();

  return (
    <div className="play-container">
      <PlayVideo />
      <Recommanded categoryId={categoryId} />
    </div>
  );
};

export default Video;
