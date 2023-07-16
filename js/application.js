var getTotals = function () {
  // get amount and quantity for each item, calculate total for item, insert value into DOM
  var totalForItems = [];

  $('tbody tr').each(function() {
    var amount = $(this).children('.dollar').text();
    amount = Number(amount.slice(1));
    var quantity = $(this).find('input').val();
    console.log("quantity: " + quantity);
    var itemTotal = amount * quantity;
    console.log("item total; " + itemTotal);

    totalForItems.push(itemTotal);
    console.log("totals array: " + totalForItems);
    $(this).find('.total span').html(itemTotal.toFixed(2));
  })

  // add totals of each item and insert total price into the DOM
  var totalPrice = totalForItems.reduce(function (total, num) {
    return total + num;
  })
  
  $("div h2.price span").html(totalPrice.toFixed(2));
  
};


$(document).ready(function() {
  getTotals();
  // if change quantity
  $('tbody').on("input", "tr td.quantity input", function(event) {
    getTotals();
  });
  // if add item to list
  $('form button').on("click", function (event) {
    event.preventDefault();
    var newItemName = $('form').children('[name=item]').val();
    var newItemPrice = $('form').children('[name=price]').val();
    newItemPrice = Number(newItemPrice).toFixed(2);

    $('tbody').append('<tr><td class="item">' + newItemName + '</td><td class="dollar">$' + newItemPrice + '</td><td class="quantity"><input type="number" value="0"></td><td class="button"><button class="btn btn-light btn-sm remove">Remove</button></td><td class="total">$<span><span></td></tr>')

    $('form input').val("");

    getTotals();
  });
  
});