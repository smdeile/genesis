

export const state = () => ({
  events: [],
  activeEvent: ''
})

export const getters = {
  getEvents: state => state.events
}

export const actions = {
  async nuxtServerInit ({ dispatch, commit }, { req, res }) {
    await dispatch('GET_EVENTS')
  }
}


