import React from 'react'
import { Button } from 'semantic-ui-react'

const styleDivider = {
  borderRight: "1px solid white",
  borderLeft: "1px solid white"
}

const NavButtons = () => {
  return (
    <Button.Group fluid>
      <Button>All</Button>
      <Button style={styleDivider}>Online</Button>
      <Button>Offline</Button>
    </Button.Group>
  )
}

export default NavButtons
