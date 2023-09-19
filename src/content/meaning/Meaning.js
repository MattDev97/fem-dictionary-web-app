import { Row, Col } from 'reactstrap';
import './Meaning.css';
function Meaning({ meaning }) {

    // const getSynonyms = (meaning) => {
    //     let synonyms = [];
    //     meaning.meanings.map((definition) => {
    //         definition.synonyms.map((synonym) => {
    //             synonyms.push(synonym);
    //         })
    //     });
    //     return synonyms;
    // }
    return (
        <div className="meaning-wrapper">
            <Row>
                <Col className="d-flex" xs="auto">
                    <h2 className="m-auto">{meaning.partOfSpeech}</h2>
                </Col>

                <Col className="divider">
                    
                </Col>
            </Row>
            <Row className="mt-4">
                <Col xs="auto">
                    <h3 className="subtitle">Meaning</h3>
                </Col>
            </Row>
            <Row className="mt-1">
                <Col xs="auto">
                    <ul>
                        {meaning.definitions.map((definition, index) => {
                            return (
                                <li className="my-1">{definition.definition}</li>
                            )
                        })}
                    </ul>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col xs="auto">
                    <h3 className="subtitle">Synonyms</h3>
                </Col>
                <Col xs="auto">
                    <Row>
                        {
                            meaning.synonyms.map((synonym, index) => {
                                return (
                                    <Col xs="auto" className="synonym">
                                        <h3>{synonym}</h3>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col xs="auto">
                    <h3 className="subtitle">Antonyms</h3>
                </Col>
                <Col xs="auto">
                    <Row>
                        {
                            meaning.antonyms.map((synonym, index) => {
                                return (
                                    <Col xs="auto" className="synonym">
                                        <h3>{synonym}</h3>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </Col>
            </Row>
        </div>
        
    )
}

export default Meaning;