import { Row, Col, Container } from 'reactstrap';
import logoSVG from '../fem-files/assets/images/logo.svg';
import './Header.css';

import FontDropdown from './FontDropdown';

function Header() {
    return (
        <Row className="justify-content-between py-4">
            <Col xs="auto">
                <img src={logoSVG}></img>
            </Col>
            <Col xs="auto">
                <Row>
                    <Col xs="auto" className="m-auto divider_right">
                        <FontDropdown></FontDropdown>
                    </Col>
                    <Col xs="auto">Night Mode</Col>
                </Row>
            </Col>
        </Row>
    );
}

export default Header;