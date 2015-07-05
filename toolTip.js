var div = document.getElementById('wrapper');
var a = document.getElementById("a");
var fadeSpeed = 25; 
var tipMessage = "Content";

var showTip = function(){    
    var tip = document.createElement("span");
    tip.className = "tooltip";
    tip.id = "tip";
    tip.innerHTML = tipMessage;
    div.appendChild(tip);
    tip.style.opacity="0"; // to start with...
    var intId = setInterval(function(){
        newOpacity = parseFloat(tip.style.opacity)+0.1;
        tip.style.opacity = newOpacity.toString();
        if(tip.style.opacity == "1"){
            clearInterval(intId);
        }
    }, fadeSpeed);
};
var hideTip = function(){
    var tip = document.getElementById("tip");
    var intId = setInterval(function(){
        newOpacity = parseFloat(tip.style.opacity)-0.1;
        tip.style.opacity = newOpacity.toString();
        if(tip.style.opacity == "0"){
            clearInterval(intId);
            tip.remove();
        }
    }, fadeSpeed);
    tip.remove();
};

a.addEventListener("mouseover", showTip, false);
a.addEventListener("mouseout", hideTip, false);
