import React, { Component } from 'react'
import { connect } from "react-redux"
import { Loader } from 'semantic-ui-react'

import CardInfo from './card-info'
import CardError from './card-error'

import {
  fetchAllChannels
} from "../../actions/index"

class Content extends Component {
  componentWillMount() {
    this.props.fetchAllChannels()
  }

  render() {
    
    if(!this.props.currentChannels.length && this.props.filterValue.length === 0) {
      return (
        <div style={{marginTop: "50px", textAlign: "center"}}>
          <Loader size='medium' inline active>Loading</Loader>
        </div>
      )
    }

    return (
      <div>
        {this.props.currentChannels.map((channel, i) => (
          channel.error 
          ? <CardError 
              key={i}
              errorMessage={channel.message}
            />
          : <CardInfo
              name={channel.display_name}
              logo={channel.logo}
              url={channel.url}
              streamInfo={channel.streamInfo.stream}
              key={i}
            />
        ))}
      </div>
    )
  }
}

function mapStateToProps({currentChannels, filterValue}) {
  return { currentChannels, filterValue }
}

export default connect(mapStateToProps, {fetchAllChannels})(Content)