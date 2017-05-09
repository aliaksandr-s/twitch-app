import React from "react"
import { connect } from "react-redux"
import { Input } from "semantic-ui-react"

import { filterChannels } from "../../actions/index"

const SeacrhBar = props => (
  <Input
    onChange={e => props.filterChannels(e.target.value, props.allChannels, props.isOnlineFilter)}
    icon="search"
    placeholder="Search..."
    fluid
    style={{ margin: "15px 0", fontSize: '1.2em' }}
  />
)

function mapStateToProps({ allChannels, isOnlineFilter }) {
  return { allChannels, isOnlineFilter }
}

export default connect(mapStateToProps, { filterChannels })(SeacrhBar)
