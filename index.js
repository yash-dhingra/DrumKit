
var arr=["sounds/tom-1.mp3","sounds/tom-2.mp3","sounds/tom-3.mp3","sounds/tom-4.mp3","sounds/snare.mp3","sounds/crash.mp3","sounds/kick-bass.mp3"];

for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    // put animation when clicked.
    

    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
       var button=this.innerText;
       Animation(button);
         switch(button){
                case "w":
                    var audio= new Audio(arr[0]);
                    audio.play();
                    break;
                case "a":
                    var audio= new Audio(arr[1]);
                    audio.play();
                    break;
                case "s":
                    var audio= new Audio(arr[2]);
                    audio.play();
                    break;
                case "d":
                    var audio= new Audio(arr[3]);
                    audio.play();
                    break;
                case "j":
                    var audio= new Audio(arr[4]);
                    audio.play();
                    break;
                case "k":
                    var audio= new Audio(arr[5]);
                    audio.play();
                    break;
                case "l":
                    var audio= new Audio(arr[6]);
                    audio.play();
                    break;

                default:
                    console.log(button);
                    break;
            }
    });
}

document.addEventListener("keydown",function(event){

    
    
    var key=event.key;
    Animation(key);
    switch(key){
        case "w":
                    var audio= new Audio(arr[0]);
                    audio.play();
                    break;
                case "a":
                    var audio= new Audio(arr[1]);
                    audio.play();
                    break;
                case "s":
                    var audio= new Audio(arr[2]);
                    audio.play();
                    break;
                case "d":
                    var audio= new Audio(arr[3]);
                    audio.play();
                    break;
                case "j":
                    var audio= new Audio(arr[4]);
                    audio.play();
                    break;
                case "k":
                    var audio= new Audio(arr[5]);
                    audio.play();
                    break;
                case "l":
                    var audio= new Audio(arr[6]);
                    audio.play();
                    break;

                default:
                    console.log(button);
                    break;
            }
    });

function Animation(button){
    var activeButton=document.querySelector("."+button);
        activeButton.classList.add("pressed");
        setTimeout(function(){
            activeButton.classList.remove("pressed");
        },100);
}
        



// var audio= new Audio(arr[0]);
//         alert(i);
//         audio.play();
//         alert(arr[0]);