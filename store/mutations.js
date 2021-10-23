import {SET_EVENTS} from './mutationsType'
export default {
  [SET_EVENTS] (state, payload) {
    state.events = payload
  }
}
