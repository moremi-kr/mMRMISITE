function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
if (isMobile()) {
  location.href = "http://m.moremi.kr";
}
$(function() {
  if (ProfileImage.src == "img/index/profile.png") {
    var profile = googleUser.getBasicProfile();
    setTimeout(function() {
          document.getElementById("username").innerText = profile.getName();
    }, 2000)
  }
  else {
    $.getJSON("https://api.ipify.org?format=jsonp&callback=?", getIP);
  }
  });
function getIP(json) {
    splitip = json.ip.split(".");
    allsplitip = splitip[0]+"."+splitip[1];
    document.getElementById("username").innerText = allsplitip
}
if (localStorage.getItem("engine") == null) {
  localStorage.setItem("engine", "https://google.com/search?q=")
}