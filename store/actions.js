export default {
  async CREATE_USER(commit) {
    try {
      console.log('startnpm');
      await this.$fire.auth.createUserWithEmailAndPassword(
        '1111@d.com',
        '222222'
      )
    } catch (e) {
      console.log('dsdfsfs');
    }
  },
  async WRITE_TO_FIRESTORE (commit) {
    const eventRef = this.$fire.firestore
      .collection('newEvents')
      .doc('even')
    try {
      const response = await eventRef.set({
        event: 'Nuxt-Fire with Firestore rocks!',
      })
      console.log('Success.', response)

    } catch (e) {
      console.log(e)
      return
    }
  },
  async READ_FROM_FIRESTORE (commit) {
    const messageRef = this.$fire.firestore
      .collection('newEvents')
      .doc('message')
    try {
      const snapshot = await messageRef.get()
      const doc = snapshot.data()
      if (!doc) {
        console.log('Document does not exist.')
        return
      }
      // commit(`${SET_CATEGORIES_DATA}`, data)
      console.log(doc.event)
    } catch (e) {
      console.log(e)
    }
  },
  async GET_EVENTS ({commit}) {
    console.log('commit', commit);
    try {
      const {data} = await this.$axios.get('https://app.ticketmaster.com/discovery/v2/events.json?apikey=slRO9G0Yog3XrEAZLfui1VjL2bFUAhBo')
      commit('SET_EVENTS', data._embedded.events)
    } catch (error) {
      console.log('error', error);
    }
  },

  async GET_CATALOG_ITEMS ({ commit }, { id }) {
    try {
      const {data} = await this.$axios.get(`https://app.ticketmaster.com/discovery/v2/events/${id}.json?apikey=slRO9G0Yog3XrEAZLfui1VjL2bFUAhBo`)
      commit('SET_ACTIVE_EVENT', data)
      return data
    } catch (e) {
      console.log(e)
    }
  },
}