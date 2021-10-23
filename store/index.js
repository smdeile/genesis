

export const state = () => ({
  events: []
})

export const getters = {
  getEvents: state => state.events
}

export const actions = {
  async nuxtServerInit ({ dispatch, commit }, { req, res }) {

    console.log('sdfsdfsdfsdfsdfsdf1111111111111111');
    await dispatch('GET_EVENTS')
  }
}


