import React, { useState } from 'react';
import { Row, Col } from 'reactstrap';
import './FontDropdown.css';

import caretSVG from '../../Assets/fem-files/assets/images/icon-arrow-down.svg';


function FontDropdown({onChange}) {
    let fonts = [
        'Sans Serif',
        'Serif',
        'Mono'
    ]
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selectedFont, setSelectedFont] = useState('Sans Serif');

    const toggle = () => setDropdownOpen(prevState => !prevState);
    
    return (
        <div data-isactive={dropdownOpen} className="dropdown-wrapper">
            <Row className="d-flex" onClick={toggle}>
                <Col xs="auto" className="d-flex">
                    <div className="m-auto selected-text">{selectedFont}</div>
                </Col>
                <Col className="d-flex ps-0" xs="auto">
                    <img src={caretSVG}></img>
                </Col>
            </Row>
            <div className="dropdown-menu-wrapper px-3 pt-1 pb-3">
                {
                    fonts.map((font) => {
                        return (
                            <div onClick={() => { setSelectedFont(font); toggle(); onChange(font); }} className="dropdown-menu-item pt-2" data-type-face={font}>{font}</div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default FontDropdown;