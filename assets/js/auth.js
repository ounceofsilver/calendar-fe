var loginButton = document.querySelector('#header-login');
var userIcon = document.querySelector('#header-user');

//
// UI Trigger login
//
loginButton.addEventListener('click', function () {
    googleLogin();
});

function googleLogin() {
    var provider = new firebase.auth.GoogleAuthProvider();
    // TODO(james): Get access to the calendar!
    // provider.addScope('https://www.googleapis.com/auth/calendar');
    linkOrSignUp(provider);
}

function microsoftLogin() {
    var provider = new firebase.auth.OAuthProvider('microsoft.com');
    // TODO(james): Get access to the calendar!
    // provider.addScope('https://outlook.office.com/calendars.readwrite');
    // https://docs.microsoft.com/en-us/previous-versions/office/office-365-api/api/version-2.0/calendar-rest-operations#CreateCalendars
    linkOrSignUp(provider);
}

function linkOrSignUp(provider) {
    var auth = firebase.auth();
    if (auth.currentUser) {
        auth.currentUser.linkWithPopup(provider);
    } else {
        auth.signInWithPopup(provider);
    }
}


//
// UI Handle login
//
function onLogin(user) {
    loginButton.style.display = 'hidden';
    userIcon.style.display = 'inherit';
}

function onLogout() {
    loginButton.style.display = 'inherit';
    userIcon.style.display = 'hidden';
}

function handleAuthStateChange (user) {
    if (user) {
        onLogin(user);
    } else {
        onLogout(user);
    }
}

firebase.auth().onAuthStateChanged(handleAuthStateChange);
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);

//
// APIs
//
function getToken () {
    var auth = firebase.auth();
    if (auth.currentUser) {
        return auth.currentUser.getIdToken();
    }
    return Promise.reject({ error: 'user.not-logged-in' });
}
