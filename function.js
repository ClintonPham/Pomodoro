function change(){
    var btn = document.getElementById("start");

    if (btn.value == "start"){
        btn.value = "pause";
        btn.innerHTML = "Pause";
    }
    else{
        btn.value = "start";
        btn.innerHTML = "Start";
    }
}