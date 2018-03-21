import React from 'react'
import { Button as RS_Button } from 'reactstrap'

const Button = ({ children, onClick }) => (
  <RS_Button
    color="primary"
    onClick={onClick}
  >
    { children }
  </RS_Button>
)

export default Button
