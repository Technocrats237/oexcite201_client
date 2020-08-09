const state = {
  logged_in: false,
  user: {},
  token: null,
  exp: null,
  token_type: '',
  status: '',
  intended: ''
}

const mutations = {
  'LOGGED_IN': (state, payload) => {
    state.token = payload.token
    state.user = payload.user
    state.exp = payload.exp
    state.logged_in = true
  },
  'LOGGED_OUT': (state) => {
    return new Promise((resolve) => {
      state.token = ''
      state.user = {}
      state.exp = null
      state.token = null
      state.logged_in = false
      state.status = ''
      resolve()
    })
  },
  'AUTH_REQUEST': (state) => {
    state.status = 'loading'
  },
  'AUTH_USER': (state, user) => {
    state.user = user
  },
  'AUTH_SUCCESS': (state) => {
    state.status = 'success'
  },
  'AUTH_ERROR': (state) => {
    state.status = 'error'
  },
  'INTENDED_URL': (state, url) => {
    state.intended = url
  }
}

const actions = {
  loggedIn ({commit}, payload) {
    localStorage.setItem('token', payload.token)
    localStorage.setItem('exp', payload.exp)
    commit('LOGGED_IN', payload)
  },
  async logout ({commit}) {
    await commit('LOGGED_OUT')
    localStorage.removeItem('token')
    localStorage.removeItem('exp')
    return new Promise((resolve) => {
      resolve()
    })
  },
  setIntended ({commit}, payload) {
    commit('INTENDED_URL', payload)
  },
  authRequest ({commit}) {
    commit('AUTH_REQUEST')
  },
  authUser ({commit}, payload) {
    commit('AUTH_USER', payload)
  },
  authError ({commit}) {
    commit('AUTH_ERROR')
  },
  authSuccess ({commit}) {
    commit('AUTH_SUCCESS')
  }
}

const getters = {
  getToken (state) {
    return state.token
  },
  getUser (state) {
    return state.user
  },
  loggedIn (state) {
    return state.logged_in
  }
}

export default {
  state,
  mutations,
  actions,
  getters,
  namespaced: true
}
