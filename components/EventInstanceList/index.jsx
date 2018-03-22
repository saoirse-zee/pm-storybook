import React from 'react'
import { ButtonGroup, Button, Container, Row, Col } from 'reactstrap'
import FilterButton from '../FilterButton'
import EventInstanceItem from '../EventInstanceItem'
import './styles.css'

const EventInstanceList = ({ instanceList }) => (
  <Container className="eventInstanceList">
    <Row>
      <FilterButton label="Available" isSelected={true} />
      <FilterButton label="Matinee" isSelected={false} />
      <FilterButton label="Sundays" isSelected={false} />
    </Row>

    <Row>
      <Button color="link" className="list-mode-button">View as calendar</Button>
    </Row>

    { instanceList.map(instance => (
      <EventInstanceItem
        key={instance.id}
        date={instance.date}
        isAvailable={instance.isAvailable}
      />
    ))}
  </Container>
)

export default EventInstanceList
