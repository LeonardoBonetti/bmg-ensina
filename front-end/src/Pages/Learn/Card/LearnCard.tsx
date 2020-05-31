
import React from 'react';
import './LearnCard.css';
import { Card, Button } from 'react-bootstrap';
import CardImg from './card.png';

const LearnCard = (props: {title: string}) => (
    <Card className="learn-card">
        <Card.Img variant="top" src={CardImg} />
        <Card.Body>
        <Button variant="primary">{props.title}</Button>
        </Card.Body>
    </Card>
)

export default LearnCard;