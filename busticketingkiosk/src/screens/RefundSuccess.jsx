import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import RefundAirplane from "../assets/images/RefundAirplane.svg";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const RefundConfirmation = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();

    return (
        <Container className="d-flex flex-column mt-5">
            <Row className="header-row">
                <Col>
                    <h1>{t('Refund Successful')}</h1>
                </Col>
            </Row>
            <Row>
                <Col className="d-flex flex-column">
                    <div>
                        <img src={RefundAirplane} alt={t('Refund Confirmation logo')} />
                        <div style={{ color: "green" }}>{t('Your refund has been initiated.')}</div>
                        <div>{t('Please contact us via 📧 email or phone 📞+1-(403)-262-1000 in 24 hours if your refund is not processed on your original payment method.')}</div>
                    </div>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                    <Button className="button button-light-grey" block onClick={() => navigate('/dashboard')}>
                        {t('Dashboard')}
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default RefundConfirmation;
