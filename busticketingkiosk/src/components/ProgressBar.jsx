import React from 'react';
import { ProgressBar, Container, Row, Col } from 'react-bootstrap';
import "../styles/ProgressBar.css"

const ProgressBarComponent = ({ currentStep }) => {
    const totalSteps = 3;
    const progressPercentage = (currentStep / totalSteps) * 100;

    return (
        <Container className="progress-container">
            <Row>
                <Col>
                    <ProgressBar now={progressPercentage} label={`${currentStep} / ${totalSteps}`}/>
                </Col>
            </Row>
        </Container>
    );
};

export default ProgressBarComponent;
