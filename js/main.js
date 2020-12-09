var firebaseConfig = {
    apiKey: "AIzaSyDeirQtitCB0nbWd3xL9sN91JgKS2vMtfI",
    authDomain: "meykoganadores.firebaseapp.com",
    databaseURL: "https://meykoganadores.firebaseio.com",
    projectId: "meykoganadores",
    storageBucket: "meykoganadores.appspot.com",
    messagingSenderId: "747248423970",
    appId: "1:747248423970:web:fa35ca95550a7eb3dda67b",
    measurementId: "G-W9KYMJ9674"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

var ref = firebase.database().ref();
ref.once("value").then(function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
        var code = childSnapshot.val().userCode;
        var firstName = childSnapshot.val().userFirst;
        var lastName = childSnapshot.val().userLast;
        var phone = childSnapshot.val().userPhone;
        var premio = childSnapshot.val().userPremio;
        var identidad = childSnapshot.val().userIdentidad;
        document.getElementById('winners').innerHTML += "<tr><td>" + code + '</td>' + "<td>" + firstName + " " + lastName + '</td>' + "<td>" + identidad + '</td>' + "<td>" + phone + '</td>' + "<td>" + premio + '</td>' + '</tr>';
    });
});