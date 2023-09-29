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
                                <div className="definition-wrapper">
                                    <li className="my-3">{definition.definition}</li>
                                    {
                                        definition.example ? 
                                        <div className="example-wrapper">
                                            "{definition.example}"
                                        </div>
                                        :
                                        null
                                    }
                                </div>
                                
                            )
                        })}
                    </ul>
                </Col>
            </Row>
            {
                meaning.synonyms && meaning.synonyms.length > 0 ?
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
                    </Row> : null
            }
            {
                meaning.antonyms && meaning.antonyms.length > 0 ?
                    <Row className="mt-3">
                        <Col xs="auto">
                            <h3 className="subtitle">Antonyms</h3>
                        </Col>
                        <Col xs="auto">
                            <Row>
                                {
                                    meaning.antonyms.map((antonym, index) => {
                                        return (
                                            <Col xs="auto" className="antonym">
                                                <h3>{antonym}</h3>
                                            </Col>
                                        )
                                    })
                                }
                            </Row>
                        </Col>
                    </Row> : null
            }
        </div>
        
    )
}

export default Meaning;