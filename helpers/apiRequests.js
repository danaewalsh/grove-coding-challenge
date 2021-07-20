const fetch = require("node-fetch");
let baseURL = 'https://code-challenge-i2hz6ik37a-uc.a.run.app'

let apiRequests = {
  orderDetails: function (orderNumber) {
    fetch(baseURL + `/orders/${orderNumber}`, {
      method: 'GET',
    })
    .then(response => response.json())
    .then(data => {
      return data;
    })
    .catch((error) => {
      return 'Error fetching order details';
    })
  },
  taxRate: function (zipCode) {
    fetch(baseURL + `/cities/${zipCode}`, {
      method: 'GET',
    })
    .then(response => response.json())
    .then(data => {
      return data;
    })
    .catch((error) => {
      return 'Error fetching tax rate';
    })
  }
}

apiRequests.taxRate('94107');
// module.exports.apiRequests = apiRequests;