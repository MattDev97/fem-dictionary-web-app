import './Content.css';
import { Row, Col } from 'reactstrap';
import playButtonSVG from '../fem-files/assets/images/icon-play.svg';

import Meaning from './meaning/Meaning';

function Content({ definition }) {
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
                <Col className="d-flex" xs="auto">
                    <img src={playButtonSVG}></img>
                </Col>
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
                    <p>{definition.sourceUrls[0]}</p>
                </Col>
            </Row>
        </div>
        
        
    );
}

export default Content;