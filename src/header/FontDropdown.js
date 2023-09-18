import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Row, Col, Container } from 'reactstrap';
import './FontDropdown.css';

import caretSVG from '../fem-files/assets/images/icon-arrow-down.svg';
import React, { useState } from 'react';

function FontDropdown() {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);
    return (
        <Row className="d-flex">
            <Col xs="auto" className="d-flex">
                <div className="m-auto selected-text">Sans Serif</div>
            </Col>
            <Col className="d-flex" xs="auto">
                <img src={caretSVG}></img>
            </Col>
        </Row>
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