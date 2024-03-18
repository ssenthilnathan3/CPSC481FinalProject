import React, { useEffect, useState } from "react";
import { Col, Container, Row, Form, Button, Alert } from "react-bootstrap";
import RefundImage from "../assets/images/RefundImage.png";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import "../styles/Refund.css"

const RefundScreen = (props) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [refundReferenceNumber, setRefundReferenceNumber] = useState("");
    const [isFormatCorrect, setIsFormatCorrect] = useState(true);
    const [processingRefund, setProcessingRefund] = useState(false);
    const { t } = useTranslation();

    useEffect(() => {
        if (location.state?.refundReferenceNumber) {
            setRefundReferenceNumber(location.state.refundReferenceNumber);
        }
    }, [location.state?.refundReferenceNumber]);

    const checkFormat = (input) => {
        const regex = /^[A-Za-z]{3}[0-9]{3}$/; // Regex to check the format
        return regex.test(input);
    };


    const handleNextClick = (e) => {
        e.preventDefault();
        setIsFormatCorrect(checkFormat(refundReferenceNumber));
        if (checkFormat(refundReferenceNumber)) {
            setProcessingRefund(true);
            setTimeout(() => {
                setProcessingRefund(false);
                navigate('/refundConfirmation', { state: { refundReferenceNumber } });
            }, 3000);
        }
    };

    return (
        <Container className="mt-5 d-flex flex-column" style={{ fontStyle: "Ariel, sans-serif" }}>
            <Row className="header-row">
                <Col>
                    <h1>{t('Refund')}</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form className="d-flex flex-column">
                        {!isFormatCorrect && (
                            <Alert variant="danger">
                                {t('You have entered an incorrect reference number. Please use a format like BOW145')}
                            </Alert>
                        )}
                        <div>
                            <Form.Label>{t('Reference Number')}</Form.Label>
                            <img src={RefundImage} style={{ height: 100, width: "auto", marginLeft: "50px" }} alt="Refund" />
                        </div>
                        <Form.Control 
                            value={refundReferenceNumber} 
                            placeholder={t('Enter reference Number')} 
                            className="align-self-center" 
                            style={{ width: "50%" }} 
                            onChange={(e) => setRefundReferenceNumber(e.target.value)}
                        />
                        <Form.Text className={`${refundReferenceNumber.length < 5 && !isFormatCorrect ? "text-danger" : ""}`}>
                            {t('Please find the reference number on the ticket. Example format: BOW145')}
                        </Form.Text>
                    </Form>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className="">
                        <Button className="button button-light-grey-refund" block onClick={() => navigate('/dashboard')} >{t('Dashboard')}</Button>
                        <Button className="button button-light-green-refund" block onClick={handleNextClick} disabled={processingRefund}>{processingRefund ? t('Processing...') : t('Process Refund')}</Button>
                    </div>
                </Col>
            </Row>
            {processingRefund && (
            <div className="processing-overlay">
                <div>
                    <div className="spinner"></div>
                    <div className="processing-text">{t('Please wait, your refund is being processed...')}</div>
                </div>
            </div>
        )}
        </Container>
    );
};

export default RefundScreen;
