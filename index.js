const helper = require('./helpers/apiRequests.js');

const orderAccounting = async function (orderNumber) {
  // possible edge cases
    // order number input as number not string
    // no order number provided
    // invalid order number
    // order number info empty

  // fetch order details using helper functions

  let orderDetailsResponse = await helper.apiRequests.orderDetails(orderNumber)
  let orderInfo = await orderDetailsResponse.json();


  // using zip code from order details, fetch tax rate using helper function

  let taxRateResponse = await helper.apiRequests.taxRate(orderInfo.zip_code);
  let tax = await taxRateResponse.json();
  console.log('tax', tax)

  // iterate through order_items
    // check quantity
    // check taxable
}

orderAccounting('sfg47');