import { Row, Col } from 'reactstrap';
import logoSVG from '../../Assets/fem-files/assets/images/logo.svg';
import moonSVG from '../../Assets/fem-files/assets/images/icon-moon.svg';
import './Header.css';

import FontDropdown from '../../Utilities/FontDropdown/FontDropdown';
import ToggleSwitch from '../../Utilities/ToggleSwitch/ToggleSwitch';

function Header({ onThemeChange, onFontChange }) {
    return (
        <Row className="justify-content-between py-5 my-2">
            <Col xs="auto">
                <img src={logoSVG}></img>
            </Col>
            <Col xs="auto">
                <Row>
                    <Col xs="auto" className="m-auto divider_right px-3">
                        <FontDropdown onChange={(font) => onFontChange(font)}></FontDropdown>
                    </Col>
                    <Col xs="auto">
                        <Row className="align-items-center">
                            <Col className="d-flex mx-1">
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