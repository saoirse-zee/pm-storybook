import React from 'react'
import { Button, Container, Row, Col } from 'reactstrap'
import './styles.css'

const EventInstanceItem = ({ date, isAvailable }) => (
  <Container className="eventInstanceItem">
    <Row>
      <Col xs="8" className="date-container">
        <p>{ date }</p>
      </Col>
      <Col xs="4" className="button-container">
        {
          isAvailable
          ? <Button color="primary" outline>Buy</Button>
          : <p>Sold out</p>
        }
      </Col>
    </Row>
  </Container>
)

export default EventInstanceItem
