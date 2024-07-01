
noOfDrumButtons = document.querySelectorAll(".drum").length;

for(var i=0; i<noOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}

function handleClick() {

    console.log(this.innerHTML);
    this.style.color = "green";
    
}


//var sound = new Audio('./sounds/tom-1.mp3');
    //sound.play();