function Engine(EngineName) {
    WriteEngine = localStorage.setItem("engine", EngineName);
    console.log("selected: "+localStorage.getItem("engine"))
}
function search(){
    var searchn = document.getElementById("search-box").value;
    location.href = localStorage.getItem("engine")+searchn
}