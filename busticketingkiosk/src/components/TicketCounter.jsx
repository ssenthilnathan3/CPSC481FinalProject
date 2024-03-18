import React, { useState } from 'react';
import SeniorIcon from "../assets/images/Seniors.svg";
import AdultIcon from "../assets/images/AdultIcon.svg";
import YouthIcon from "../assets/images/YouthIcon.svg";
import ChildIcon from "../assets/images/ChildIcon.svg";
import "../styles/TicketCounter.css";
import { useTranslation } from 'react-i18next';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';


const TicketCounter = ({ label, minAge, maxAge, ticketPrice, currentCount, setCurrentCount}) => {
    const { t } = useTranslation();
    const getIconForLabel = (label) => {
        switch (label) {
            case 'Senior':
                return SeniorIcon;
            case 'Adult':
                return AdultIcon;
            case 'Youth':
                return YouthIcon;
            case 'Child':
                return ChildIcon;
            default:
                return null;
        }
    };
    const renderTooltipIncrement = (props) => (
        <Tooltip id="button-tooltip-increment" {...props}>
            {t('Increase count')}
        </Tooltip>
    );

    const renderTooltipDecrement = (props) => (
        <Tooltip id="button-tooltip-decrement" {...props}>
            {t('Decrease count')}
        </Tooltip>
    );
    return (
        <div className="ticket-counter">
            <span> <img className="ticket-icon" src={getIconForLabel(label)} alt={label} /> </span>
            <span><b>{t(label)} {label === "Senior" ? ` (${minAge}+)` : ` (${minAge} - ${maxAge})`} {ticketPrice}</b> </span>
            <OverlayTrigger placement="top" overlay={renderTooltipDecrement}>
                <button className="decrement-button" onClick={() => setCurrentCount(currentCount > 0 ? currentCount - 1 : 0)}>-</button>
            </OverlayTrigger>
            <span> <b>{currentCount}</b> </span>
            <OverlayTrigger placement="top" overlay={renderTooltipIncrement}>
                <button className="increment-button" onClick={() => setCurrentCount(currentCount + 1)}>+</button>
            </OverlayTrigger>
        </div>
    );
};

export default TicketCounter