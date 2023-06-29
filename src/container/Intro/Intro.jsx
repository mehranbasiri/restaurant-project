import React, { useRef, useState } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import "./Intro.css";
import { meal } from "../../constants";

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const vidRef = useRef(null);
  const handleVideo = () => {
    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
    setPlayVideo(!playVideo);
  };
  return (
    <div className="video">
      <video
        ref={vidRef}
        src={meal}
        type="video/mp4"
        loop
        controls={false}
        muted
      />

      <div className="video-overlay flex__center">
        <div
          className="video-overlay-circle flex__center"
          onClick={handleVideo}
        >
          {playVideo ? (
            <BsPauseFill color="#fff" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={30} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
