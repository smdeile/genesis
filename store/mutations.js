export default {
  SET_EVENTS (state, payload) {
    state.events = payload
  },
  SET_ACTIVE_EVENT (state, payload) {
    state.activeEvent = payload
  },
  IS_POPUP_SIGNUP (state, payload) {
    state.isPopupSignUp = payload
  },
  IS_POPUP_SIGNIN (state, payload) {
    state.isPopupSignIn = payload
  },
  LOGGED_USER (state, payload) {
    state.loggedUser = payload
    console.log('sedfsdfsdfsdfsdfsd', payload, state.loggedUser);
  },
  LOGGED_OUT (state) {
    state.loggedUser = null
  }
}
