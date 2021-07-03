let getIdFunction = function() {
    var x = sessionStorage.getItem("cust_id");
    document.getElementById("h2ref").innerHTML = "cust_id = " + x;
}