for(let i=20;i>0;i--){
    let slider = document.createElement("div");
    slider.setAttribute("class","slider animate");
    slider.setAttribute("id","slider"+i);
    document.getElementById("game").appendChild(slider);
}
var theme =document.getElementById('theme');
theme.onclick = function(){
    document.body.classList.toggle('dark-theme');
    if(document.body.classList.contains('dark-theme')){
        theme.innerHTML = 'MoonLight';
    }
    else{
        theme.innerHTML = 'SunLight';
    }
}

var slideWidth = 300;
function stopSliding(slider){
    var sliderCurrent = document.getElementById("slider".concat(slider));
    var sliderAbove = document.getElementById("slider".concat(slider+1));
    if(slider==1)
    var sliderBelow=sliderCurrent;
    else
    var sliderBelow = document.getElementById("slider".concat(slider-1));
    var left = window.getComputedStyle(sliderCurrent).getPropertyValue("left");
    sliderCurrent.classList.remove("animate");
    sliderCurrent.style.left = left;
    var width = parseFloat(window.getComputedStyle(sliderCurrent).getPropertyValue("width"));
    var leftBelow = parseFloat(window.getComputedStyle(sliderBelow).getPropertyValue("left"));
    left = parseFloat(left);
    var difference = left - leftBelow;
    var absDifference = Math.abs(difference);
    if(difference>width || difference < -width){
        var score = "Score: ".concat(slider-1);
        alert(score);
        location.reload();
    }
    if(slider===20)
    {
        alert("YOu Won");
        location.reload();
    }
    if(difference>0)
    left = left + absDifference;
    else
    {
        left = left - difference;
        sliderCurrent.style.left = left.toString().concat("px");
    }
    var offset = (width-absDifference).toString().concat("px");
    sliderCurrent.style.width = offset;
    sliderAbove.style.width = offset;
    sliderAbove.style.visibility ="visible";
    slideWidth = slideWidth + absDifference;
    document.documentElement.style.setProperty('--GameWidth',slideWidth.toString().concat("px"))
    var onclick = `stopSliding(${slider+1})`;
    console.log(slider+1)
    document.getElementById("btn").setAttribute("onclick",onclick);
    console.log(`Left : ${left} offset: ${offset} Difference : ${absDifference} SlideWidth : ${slideWidth}`);
}