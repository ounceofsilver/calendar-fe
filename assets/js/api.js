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
