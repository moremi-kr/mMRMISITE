// function onSignIn(googleUser) {
//     var profile = googleUser.getBasicProfile();
//     // 이너텍스트라는게 있구나...
//     document.getElementById("username").innerText = profile.getName();
//       console.log("UserName: "+profile.getName());
//     document.getElementById("ProfileImage").src = profile.getImageUrl();
//       console.log("ProfileImage: "+profile.getImageUrl());
//     $('#username').attr("onclick", "signOut();");
//     $('#ProfileImage').attr("onclick", "signOut();");
//     // console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
//     // console.log('Name: ' + profile.getName());
//     // console.log('Image URL: ' + profile.getImageUrl());
//     // console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
//   }
// function signOut() {
//   var auth2 = gapi.auth2.getAuthInstance();
//   auth2.signOut().then(function () {
//     console.log('User signed out.');
//   });
//   // 게스트와 같이 초기화 작업임.
//   $.getJSON("https://api.ipify.org?format=jsonp&callback=?", getIP);
//   document.getElementById("username").innerText = allsplitip;
//   document.getElementById("ProfileImage").src = "img/index/profile.png";
//   $('#username').attr("onclick", "");
//   $('#ProfileImage').attr("onclick", "");
// }

  var googleUser = {};
  var startApp = function() {
    gapi.load('auth2', function(){
      // Retrieve the singleton for the GoogleAuth library and set up the client.
      auth2 = gapi.auth2.init({
        client_id: 'YOUR_CLIENT_ID.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        // Request scopes in addition to 'profile' and 'email'
        //scope: 'additional_scope'
      });
      attachSignin(document.getElementById('customBtn'));
    });
  };

  function attachSignin(element) {
    console.log(element.id);
    auth2.attachClickHandler(element, {},
        function(googleUser) {
          document.getElementById('name').innerText = "Signed in: " +
              //이 부분에 회원가입, 로그인 로직 추가
              googleUser.getBasicProfile().getName();
              googleUser.getBasicProfile().getId();
              googleUser.getBasicProfile().getEmail();
              
        }, function(error) {
          alert(JSON.stringify(error, undefined, 2));
        });
  }

startApp();