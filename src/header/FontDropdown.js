import React, { useState } from 'react';
import { Row, Col } from 'reactstrap';
import './FontDropdown.css';

import caretSVG from '../fem-files/assets/images/icon-arrow-down.svg';


function FontDropdown() {
    let fonts = [
        'Sans Serif',
        'Serif',
        'Mono'
    ]
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selectedFont, setSelectedFont] = useState('Sans Serif');

    const toggle = () => setDropdownOpen(prevState => !prevState);
    
    return (
        <div className="dropdown-wrapper">
            <Row className="d-flex" onClick={toggle}>
                <Col xs="auto" className="d-flex">
                    <div className="m-auto selected-text">{selectedFont}</div>
                </Col>
                <Col className="d-flex" xs="auto">
                    <img src={caretSVG}></img>
                </Col>
            </Row>
            <div data-isactive={dropdownOpen} className="dropdown-menu-wrapper px-3 pt-1 pb-3">
                {
                    fonts.map((font, index) => {
                        return (
                            <div onClick={() => { setSelectedFont(font); toggle(); }} className="dropdown-menu-item pt-2">{font}</div>
                        )
                    })
                }
                {/* <div onClick={() => setSelectedFont('Sans Serif')} className="dropdown-menu-item pt-2">Sans Serif</div>
                <div onClick={setSelectedFont} className="dropdown-menu-item pt-2">Serif</div>
                <div className="dropdown-menu-item pt-2">Mon</div> */}
            </div>
        </div>
        
        // <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        //     <DropdownToggle caret className="custom-dropdown-toggle">
        //         <Row>
        //             <Col xs="auto">
        //                 <p>Sans Serif</p>
        //             </Col>
        //             <Col xs="auto">
        //                 <img src={caretSVG}></img>
        //             </Col>
        //         </Row>
                
                
        //     </DropdownToggle>
        //     <DropdownMenu className="custom-dropdown-menu">
        //         <DropdownItem header className="custom-dropdown-item">Header</DropdownItem>
        //         <DropdownItem className="custom-dropdown-item">Some Action</DropdownItem>
        //         <DropdownItem className="custom-dropdown-item">Another Action</DropdownItem>
        //         <DropdownItem divider />
        //         <DropdownItem className="custom-dropdown-item">Separated Action</DropdownItem>
        //     </DropdownMenu>
        // </Dropdown>
    )
}

export default FontDropdown;