import React, { useRef, useState } from 'react';
import { Row, Col } from 'reactstrap';

import playButtonSVG from '../../fem-files/assets/images/icon-play.svg';

export default function PlayButton({ src }) {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlayPause = () => {
        if (isPlaying) {
          audioRef.current.pause();
        } else {
          audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
      };

  return (
    <Col data-active={isPlaying} onClick={togglePlayPause} className="d-flex play-button" xs="auto">
        <img src={playButtonSVG}></img>
        <audio ref={audioRef}>
            <source src={src} type="audio/mp3" />
            Your browser does not support the audio element.
      </audio>
    </Col>
  )
}
