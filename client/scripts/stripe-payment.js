
var stripeResponseHandler = function (status, response) {

  console.log('stripe received');

  console.log(status);
  console.log(response);

  // Grab the form:
  var $form = $('#payment-stripe-form');

  if (response.error) { // Problem!

    // Show the errors on the form:
    $form.find('.payment-errors').text(response.error.message);
    $form.find('.submit').prop('disabled', false); // Re-enable submission

  } else { // Token was created!

    // Get the token ID:
    var token = response.id;
    console.log(token);

    // Insert the token ID into the form so it gets submitted to the server:
    $form.append($('<input type="hidden" name="stripeToken">').val(token));

    // Submit the form:
    $form.get(0).submit();
  }
};

module.exports = stripeResponseHandler
