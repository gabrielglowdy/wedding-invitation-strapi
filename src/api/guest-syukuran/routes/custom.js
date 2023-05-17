module.exports = {
  routes: [
    {
      method: 'PUT',
      path: '/guest-syukurans-data/:slug',
      handler: 'guest-syukuran.updateData',
      config: {
        auth: false
      }
    }
  ]
}