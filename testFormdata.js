function test() {
    var name = document.getElementById("name").value;
    var join = document.getElementById("join").value;
    var travel = document.getElementById("travel").value;

    var name = localstorage.setItem("name", name);
    var join = localstorage.setItem("join", join);
    var travel = localstorage.setItem("travel", travel);
    
    var name = localstorage.getItem("name", name);
    var join = localstorage.getItem("join", join);
    var travel = localstorage.getItem("travel", travel);

    document.getElementById("test").innerHTML = 5+5;
}