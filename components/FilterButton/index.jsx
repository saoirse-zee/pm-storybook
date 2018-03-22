import React from 'react'
import { Button } from 'reactstrap'
import './styles.css'

const FilterButton = ({ label, isSelected, onClick }) => (
  <Button
    className="filterButton"
    color="info"
    size="sm"
    active={isSelected}
    onClick={onClick}
  >
    { label }
  </Button>
)

export default FilterButton
