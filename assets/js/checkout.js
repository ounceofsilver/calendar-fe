var basicYearlyButton = document.getElementById('checkout-button-BASIC_YEARLY');
var advancedYearlyButton = document.getElementById('checkout-button-ADVANCED_YEARLY');

var url = window.location.protocol + "//isitshabbat.net";

function useCheckoutTrigger (plan) {
  return function () {
    var auth = firebase.auth();
    if (auth.currentUser) {
      stripe
        .redirectToCheckout({
          items: [{ plan: plan, quantity: 1 }],

          successUrl: url,
          cancelUrl: url,
          client_reference_id: firebase.auth().currentUser.uid
        })
        .then(function(result) {
          if (result.error) {
            console.error("Failed to go to Stripe", result);
          }
        });
    } else {
      // Request login first!
      login();
      // TODO(james): Then go to stripe!
    }
  }
}

basicYearlyButton.addEventListener("click", useCheckoutTrigger("BASIC_YEARLY"));
advancedYearlyButton.addEventListener("click", useCheckoutTrigger('ADVANCED_YEARLY'));
