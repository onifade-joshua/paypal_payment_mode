
export default paypal.Buttons({
    createOrder() {
      // This function sets up the details of the transaction, including the amount and line item details.
      return fetch("/my-server/create-paypal-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cart: [
            {
              sku: "YOUR_PRODUCT_STOCK_KEEPING_UNIT",
              quantity: "YOUR_PRODUCT_QUANTITY"
            }
          ]
        })
      });
    },
    onApprove(data) {
      // This function captures the funds from the transaction.
      return fetch("/my-server/capture-paypal-order", {
        method: "POST",
        body: JSON.stringify({
          orderID: data.orderID
        })
      })
      .then((response) => response.json())
      .then((details) => {
        // This function shows a transaction success message to your buyer.
        alert('Transaction completed by ' + details.payer.name.given_name);
      });
    }
  }).render('#paypal-button-container');
  //This function displays payment buttons on your web page.