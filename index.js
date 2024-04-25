// document.querySelector("button").addEventListener("click",handleclick);

// function handleclick(){
//     alert("i got clicked!");
// }


// detecting button press

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttoninnerhtml = this.innerHTML;
    
        makesound(buttoninnerhtml);
        buttonanimation(buttoninnerhtml);

    });

}

// betecting keyboard press

document.addEventListener("keypress", function(Event){
    makesound(Event.key);
    buttonanimation(Event.key);
})

function makesound(key){

    switch (key) {
        case "a":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;

        case "s":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;

        case "d":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;

        case "f":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;

        case "j":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;

        case "k":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;

        case "l":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
        default: console.log(buttoninnerhtml);
            break;
    }



}


function buttonanimation(currentkey){
var activebutton=document.querySelector("."+currentkey);
activebutton.classList.add("pressed");

setTimeout(function(){
    activebutton.classList.remove("pressed")
},100)
}




// document.addEventListener("keypress", function(){
//     alert("key was pressed!");
// })




// var audio = new Audio('sounds/tom-1.mp3');
// audio.play();