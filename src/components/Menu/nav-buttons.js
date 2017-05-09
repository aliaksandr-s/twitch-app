import React from "react"
import { Button } from "semantic-ui-react"
import { connect } from "react-redux"

import {
  fetchAllChannels,
  fetchOnlineChannels,
  fetchOfflineChannels,
  removeAllChannels
} from "../../actions/index"

const whiteBorder = {
  borderRight: "1px solid white",
  borderLeft: "1px solid white"
}

const NavButtons = props => {
  return (
    <Button.Group fluid>
      <Button
        onClick={() => {
          props.removeAllChannels()
          props.fetchAllChannels()
        }}
      >
        All
      </Button>
      <Button
        onClick={() => props.fetchOnlineChannels(props.allChannels)}
        style={whiteBorder}
      >
        Online
      </Button>
      <Button onClick={() => props.fetchOfflineChannels(props.allChannels)}>
        Offline
      </Button>
    </Button.Group>
  )
}

function mapStateToProps({ allChannels }) {
  return { allChannels }
}

export default connect(mapStateToProps, {
  fetchAllChannels,
  fetchOnlineChannels,
  fetchOfflineChannels,
  removeAllChannels
})(NavButtons)
