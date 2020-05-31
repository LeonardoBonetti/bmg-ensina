
import React from 'react';
import './LearnCard.css';
import { Card, Button } from 'react-bootstrap';
import CardImg from './card.png';
import { Link } from 'react-router-dom';

const LearnCard = (props: {title: string, url:string, click?: boolean}) => (
    <>
    {props.click ?
        <Link to="/reserva-de-emergencia">
            <Card className="learn-card">
                <Card.Img variant="top" src={props.url}/>
                <Card.Body>
                <Button variant="primary">{props.title}</Button>
                </Card.Body>
            </Card>    
        </Link> :
        <Card className="learn-card">
            <Card.Img variant="top" src={props.url}/>
            <Card.Body>
            <Button variant="primary">{props.title}</Button>
            </Card.Body>
        </Card>}
    </>
)
export default LearnCard;