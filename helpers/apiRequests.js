const fetch = require("node-fetch");
let baseURL = 'https://code-challenge-i2hz6ik37a-uc.a.run.app'

module.exports.apiRequests = {
  orderDetails: async function (orderNumber) {
    return fetch(baseURL + `/orders/${orderNumber}`, {
      method: 'GET',
    })
  },
  taxRate: async function (zipCode) {
    return fetch(baseURL + `/cities/${zipCode}`, {
      method: 'GET',
    })
  }
}