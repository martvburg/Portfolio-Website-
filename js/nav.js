function opennav(){
    var x = document.getElementById("navbar");
       if (x.className === "navigation"){
           x.className += "mobile";
       }
    else {
        x.className = "navigation";
    }
}