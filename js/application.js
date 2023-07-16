var getTotals = function () {
  // get amount and quantity for each item, calculate total for item, insert value into DOM
  var totalForItems = [];

  $('tbody tr').each(function() {
    var amount = $(this).children('.dollar').text();
    amount = Number(amount.slice(1));
    var quantity = $(this).find('input').val();
    var itemTotal = amount * quantity;
    itemTotal = itemTotal;
    totalForItems.push(itemTotal);
    console.log("totals array: " + totalForItems);
    $(this).find('.total span').append(itemTotal.toFixed(2));
  })

  // add totals of each item and insert total price into the DOM
  var totalPrice = totalForItems.reduce(function (total, num) {
    return total + num;
  })
  
  $("div h2.price span").html(totalPrice);
  
};


$(document).ready(function() {
  getTotals();
  
});