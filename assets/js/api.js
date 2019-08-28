//
// APIs
//
function getToken() {
  var auth = firebase.auth();
  if (auth.currentUser) {
    return auth.currentUser.getIdToken();
  }
  return Promise.reject({ error: "user.not-logged-in" });
}

var setPlan = firebase.functions().httpsCallable("onboarding");

function startTrial () {
  var result = setPlan({
    tier: "BASIC",
    strategy: "MONTHLY",
    isTrial: true
  });
  result.then(console.log);
  debugger;
}

function setBasicMonthly () {
  var result = setPlan({
    tier: 'BASIC',
    strategy: 'MONTHLY',
    isTrial: false,
  });
  debugger;
}

function setBasicYearly() {
  var result = setPlan({
    tier: "BASIC",
    strategy: "YEARLY",
    isTrial: false
  });
  debugger;
}

function setAdvancedMonthly() {
  var result = setPlan({
    tier: "ADVANCED",
    strategy: "MONTHLY",
    isTrial: false
  });
  debugger;
}

function setAdvancedMonthly() {
  var result = setPlan({
    tier: "ADVANCED",
    strategy: "YEARLY",
    isTrial: false
  });
  debugger;
}
