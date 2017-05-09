import {
  FETCH_ALL_CHANNELS,
  FETCH_ONLINE_CHANNELS,
  FETCH_OFFLINE_CHANNELS,
  REMOVE_ALL_CHANNELS,
  FILTER_CHANNELS
} from "../actions/index"

const INITIAL_STATE = {
  allChannels: [],
  currentChannels: [],
  isOnlineFilter: null,
  filterValue: ''
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_ALL_CHANNELS:
      return {
        ...state,
        allChannels: action.payload,
        currentChannels: action.payload,
        isOnlineFilter: null
      }
    case REMOVE_ALL_CHANNELS:
      return {
        ...state,
        allChannels: action.payload,
        currentChannels: action.payload
      }
    case FETCH_ONLINE_CHANNELS:
      return { ...state, currentChannels: action.payload, isOnlineFilter: true }
    case FETCH_OFFLINE_CHANNELS:
      return {
        ...state,
        currentChannels: action.payload,
        isOnlineFilter: false
      }
    case FILTER_CHANNELS:
      return {
        ...state,
        currentChannels: action.payload.channels,
        filterValue: action.payload.filterValue
      }
    default:
      return state
  }
}
