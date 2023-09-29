import React, { useState, useEffect } from 'react';
import { DotPulse } from '@uiball/loaders'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Row, Col, Container } from 'reactstrap';

import Header from './header/Header';
import SearchBar from './Utilities/search-bar/SearchBar';
import Content from './content/Content';

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [dataDefinition, setDataDefinition] = useState(null);
    const [searchTerm, setSearchTerm] = useState('airplane');

    const [theme, setTheme] = useState('light'); // default theme

    const handleValueChange = (value) => {
        setSearchTerm(value);
        setIsLoading(true);
        // Fetch data from API when the component mounts
        fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + value)
            .then(response => response.json())
            .then(data => {
                console.dir(data);
                if(data.length > 0) {
                    setDataDefinition(data[0]);
                } else {
                    setDataDefinition(null);
                }
                setTimeout(() => {
                    setIsLoading(false);
                }, 1000);
            })
            .catch(error => {
                console.error("There was a problem with the fetch operation:", error);
                setDataDefinition(null);

                setIsLoading(false);
            }).catch(error => {
                console.error("There was a problem with the fetch operation:", error);
                setDataDefinition(null);

                setIsLoading(false);
            });
    }

    const handleThemeChange = (theme) => {
        setTheme(theme);
    }

    return (
        <div data-theme={theme} className="App">
            <Container className="px-4">
                <Header onThemeChange={handleThemeChange}></Header>
                <SearchBar searchTerm={searchTerm} onValueChange={handleValueChange}></SearchBar>
                {isLoading ? 
                    <Row className="loading-spinner align-content-center d-flex">
                        <Col className="justify-content-center d-flex">
                            <DotPulse color="var(--purple)"></DotPulse>
                        </Col>
                    </Row> 
                    : 
                    <Content definition={dataDefinition}></Content>}
                
            </Container>

        </div>
    );
}

export default App;