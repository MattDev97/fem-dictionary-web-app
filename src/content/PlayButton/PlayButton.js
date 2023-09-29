import React, { useRef, useState, useEffect } from 'react';
import { Row, Col } from 'reactstrap';
import { Howl } from 'howler';

import playButtonSVG from '../../fem-files/assets/images/icon-play.svg';

export default function PlayButton({ url }) {

	const [playing, setPlaying] = useState(false);
	const [source, setSource] = useState(null);

	const loadAudio = async () => {
		let audioContextW = new (window.AudioContext || window.webkitAudioContext)();
		let arrayBufferW = null;
		let audioBufferW = null;

		const response = await fetch(url);
		arrayBufferW = await response.arrayBuffer();
		audioContextW.decodeAudioData(arrayBufferW, (buffer) => {
			audioBufferW = buffer;
			
			const src = audioContextW.createBufferSource();
			src.buffer = audioBufferW;
			src.connect(audioContextW.destination);
			src.start(0);
			setSource(src);
			setPlaying(true);
		});
	};

	const togglePlay = async () => {
		if (playing) {
			source.stop();
			setPlaying(false);
		} else {
			await loadAudio();
		}
	};

	return (
		<Col onClick={() => {togglePlay()}} className="d-flex play-button" xs="auto">
			<img src={playButtonSVG}></img>
		</Col>
	)
}
