var getItemTotal = function () {
  // get amount and quantity for each item, calculate total for item, insert value into DOM
  $('tr').each(function() {
    var amount = $(this).children('.dollar').text();
    amount = Number(amount.slice(1));
    var quantity = $(this).find('input').val();
    var itemTotal = amount * quantity;
    itemTotal = itemTotal.toFixed(2);
    
    $(this).find('.total span').append(itemTotal);
  })
}


$(document).ready(function() {
  getItemTotal();
});