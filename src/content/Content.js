import React, { useState, useEffect } from 'react';

import './Content.css';
import { Row, Col } from 'reactstrap';
import newWindowIcon from '../fem-files/assets/images/icon-new-window.svg';

import Meaning from './meaning/Meaning';
import PlayButton from './PlayButton/PlayButton';

function Content({ definition }) {

    const [audioUrl, setAudioUrl] = useState('');  
    
    useEffect(() => {
        if (definition) {
            let phonetic = definition.phonetics.find((phonetic) => {
                return phonetic?.audio && phonetic?.audio !== '';
            });
            setAudioUrl(phonetic?.audio);
        }
    }, [definition]);  // This effect runs whenever 'definition' prop changes


    if (!definition) {
        return (
            <div className="mt-5 no-definitions-found">
                <div className="mt-3 frownie-face">
                    😕
                </div>
                <h3 className="my-3">No Definitions Found</h3>
                <p>Sorry pal, we couldn't find definitions for the word you were looking for. You can try the search again at later time or head to the web instead.</p>
            </div>
        )
    }
    return (
        <div className="mt-5">
            <Row className="justify-content-between">
                <Col xs="auto">
                    <Row>
                        <Col xs="auto">
                            <h1>{definition.word}</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="phonetic" xs="auto">
                            <h2>{definition.phonetic}</h2>
                        </Col>
                    </Row>
                    
                </Col>

                <PlayButton url={audioUrl}></PlayButton>
                
            </Row>
            {definition.meanings.map((meaning, index) => {
                return (
                    <Row className="mt-3"><Meaning meaning={meaning}></Meaning></Row>
                )
            })}
            
            <Row className="my-3">
                <Col className="divider">
                </Col>
            </Row>
            <Row className="my-3">
                <Col xs="auto">
                    <p>Source</p>
                </Col>
                <Col className="source-urls">
                    {
                        definition.sourceUrls.map((url, index) => {
                            return (
                                <Row>
                                    <a href={url}>
                                        {url}
                                        <img className="ml-3" src={newWindowIcon}></img>
                                    </a>
                                </Row>
                            )
                        })
                    }
                </Col>
            </Row>
        </div>
        
        
    );
}

export default Content;