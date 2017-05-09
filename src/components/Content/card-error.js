import React from 'react'
import { Card } from 'semantic-ui-react'

const CardError = (props) => (
  <Card fluid color='red' header={props.errorMessage}></Card>
)

export default CardError
