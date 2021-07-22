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

  // build place holder result
  let accountingDetails = {
    'Order': orderNumber,
    'Customer Name': orderInfo.shipping_name,
    'Subtotal' : 0,
    'Taxes': 0,
    'Total':0
  }

  // iterate through order_items
    // check quantity
    // check taxable
  orderInfo.order_items.forEach((item) => {
    let price = item.price / 100;
    let quantity = item.quantity;
    let taxable = item.taxable;

    let totalAmountNoTax = price * quantity;

    accountingDetails.Subtotal += totalAmountNoTax;

    if (taxable) {
      let totalTax = totalAmountNoTax * (tax.tax_rate / 100);
      let roundedTotalTax = Math.round(100 * totalTax)/100;
      accountingDetails.Taxes += roundedTotalTax;
    }
  })

  accountingDetails.Total = Math.round(100 * (accountingDetails.Subtotal + accountingDetails.Taxes))/100;

  console.log(accountingDetails);
  return accountingDetails;
}

orderAccounting('sfg47');