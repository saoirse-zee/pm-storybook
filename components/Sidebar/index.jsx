import React from 'react'
import { ButtonGroup, Button, Container, Row, Col } from 'reactstrap'
import FilterButton from '../FilterButton'
import EventInstanceItem from '../EventInstanceItem'
import './styles.css'

const Sidebar = ({ header, subHeader, children }) => (
  <div className="sidebar">
    <div className="headers">
      <h1>{ header }</h1>
      <h2>{ subHeader }</h2>
    </div>
    <div className="content">
      { children }
    </div>
  </div>
)

export default Sidebar
