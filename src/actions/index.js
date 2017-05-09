import axios from 'axios';

export const FETCH_ALL_CHANNELS = 'FETCH_ALL_CHANNELS';
export const FETCH_ONLINE_CHANNELS = 'FETCH_ONLINE_CHANNELS';
export const FETCH_OFFLINE_CHANNELS = 'FETCH_OFFLINE_CHANNELS';
export const FILTER_CHANNELS = 'FILTER_CHANNELS';
export const REMOVE_ALL_CHANNELS = 'REMOVE_ALL_CHANNELS';

const ROOT_URL = 'https://cors-anywhere.herokuapp.com/https://wind-bow.gomix.me/twitch-api';

const channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "comster404", "clickerheroesbot"];

export function removeAllChannels() {
  return {
    type: REMOVE_ALL_CHANNELS,
    payload: []
  } 
}

export function fetchAllChannels() {
  let fetchedChannels = []
  let fetchedStreams = []

  channels.forEach((channel) => {
    fetchedChannels.push(
      axios.get(`${ROOT_URL}/channels/${channel}`)
    )
    fetchedStreams.push(
      axios.get(`${ROOT_URL}/streams/${channel}`)
    )
  })

  return (dispatch) => {
    Promise.all(fetchedChannels)
      .then(channels => {fetchedChannels = channels})
      .then(() => Promise.all(fetchedStreams))
      .then(streams => {fetchedStreams = streams})
      .then(() => fetchedChannels = fetchedChannels.map(channel => channel.data))
      .then(() => fetchedChannels.map((channel, i) => channel['streamInfo'] = fetchedStreams[i]['data']))
      .then(() => 
        dispatch({
          type: FETCH_ALL_CHANNELS,
          payload: fetchedChannels
        })
      )
  }
}


export function fetchOnlineChannels(allChannels) {
  const filteredChannels = allChannels.filter(
    channel => channel.streamInfo.stream
  )
  return {
    type: FETCH_ONLINE_CHANNELS,
    payload: filteredChannels
  }
}


export function fetchOfflineChannels(allChannels) {
  const filteredChannels = allChannels.filter(
    channel => !channel.streamInfo.stream
  )

  return {
    type: FETCH_OFFLINE_CHANNELS,
    payload: filteredChannels
  }
}

export function filterChannels(filterValue, allChannels, isOnline) {
  allChannels = allChannels.filter(channel => channel.display_name) // remove error channels

  if (isOnline === true) {
    allChannels = allChannels.filter(channel => channel.streamInfo.stream)
  } else if (isOnline === false) {
    allChannels = allChannels.filter(channel => !channel.streamInfo.stream)
  } 

  const filteredChannels = allChannels.filter(channel => {
    const channelName = channel.display_name.toLowerCase()
    return channelName.indexOf(filterValue.toLowerCase()) !== -1
  })

  return {
    type: FILTER_CHANNELS,
    payload: {'channels': filteredChannels, 'filterValue': filterValue}
  }
}