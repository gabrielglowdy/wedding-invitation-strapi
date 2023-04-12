module.exports = {
  routes: [
    {
      method: 'PUT',
      path: '/guests-data/:slug',
      handler: 'guest.updateData',
      config: {
        auth: false
      }
    }
  ]
}