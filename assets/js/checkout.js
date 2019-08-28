var basicMonthlyButton = document.getElementById('checkout-button-BASIC_MONTHLY');
var basicYearlyButton = document.getElementById('checkout-button-BASIC_YEARLY');
var advancedMonthlyButton = document.getElementById('checkout-button-ADVANCED_MONTHLY');
var advancedYearlyButton = document.getElementById('checkout-button-ADVANCED_YEARLY');

var url = window.location.protocol + "//isitshabbat.net";

function useCheckoutTrigger (plan) {
  return function () {
    stripe
      .redirectToCheckout({
        items: [{ plan: plan, quantity: 1 }],

        successUrl: url,
        cancelUrl: url
      })
      .then(function(result) {
        if (result.error) {
          console.error("Failed to go to Stripe", result);
        }
      });
  }
}

basicMonthlyButton.addEventListener("click", useCheckoutTrigger('BASIC_MONTHLY'));
basicYearlyButton.addEventListener("click", useCheckoutTrigger("BASIC_YEARLY"));
advancedMonthlyButton.addEventListener("click", useCheckoutTrigger("ADVANCED_MONTHLY"));
advancedYearlyButton.addEventListener("click", useCheckoutTrigger('ADVANCED_YEARLY'));
