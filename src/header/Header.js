import { Row, Col } from 'reactstrap';
import logoSVG from '../fem-files/assets/images/logo.svg';
import moonSVG from '../fem-files/assets/images/icon-moon.svg';
import './Header.css';

import FontDropdown from '../Utilities/FontDropdown/FontDropdown';
import ToggleSwitch from '../Utilities/ToggleSwitch/ToggleSwitch';

function Header({ onThemeChange }) {
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
                    <Col xs="auto">
                        <Row className="align-items-center">
                            <Col className="d-flex">
                                <ToggleSwitch onChange={(value) => onThemeChange(value ? 'dark' : 'light')}></ToggleSwitch>
                            </Col>
                            <Col className="p-0">
                                <img src={moonSVG}></img>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

export default Header;