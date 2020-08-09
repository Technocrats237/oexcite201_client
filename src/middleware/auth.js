export default function auth ({next, axios, store, router, to}) {
  const token = localStorage.getItem('token')
  if (!token) {
    store.dispatch('Auth/setIntended', to.name)
    return router.push({
      name: 'login'
    })
  }
  axios.get(`users/auth`)
      .then(res => res.data)
      .then(user => {
        store.dispatch('Auth/authUser', user)
      });
  return next()
}
