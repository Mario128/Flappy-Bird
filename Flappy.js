var character = document.getElementById("character");
var hole = document.getElementById("hole");
var obstacle = document.getElementById("obstacle");
var jumping = false;
var score = 0;
var index = 0;


hole.addEventListener("animationiteration", () => {

    var rnd = Math.random()*3;
    var top =(rnd*100) + 150;
    hole.style.top=-(top) + "px";
    score ++;
/*
    let random = Math.random()*(-450) -150;
    hole.style.top = random + "px"
    score ++;*/

});


var gravity = setInterval(function gravy(){
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));
    let holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    let cTop = -(500-characterTop);

    if(index == 0) {
        if(jumping == false) {
            character.style.top = (characterTop + 3) + "px";
        }
        if((characterTop > 485)||((obstacleLeft<20)&&(obstacleLeft>-50)&&((cTop<holeTop+15)||(cTop>holeTop+140)))){

            obstacle.style.animationPlayState = "paused"
            hole.style.animationPlayState = "paused"
            alert("GAMEOVER || SCORE: " + score);
            score = 0;
            index = 1;
            /* setTimeout(gravy, 1000000);
             location.reload();
     */

            //obstacle.classList.remove("animation");
            //hole.classList.remove("animation");
            obstacle.removeAttribute("class");
            hole.removeAttribute("class");
            setTimeout(function() {
                obstacle.setAttribute("class", "animation");
                hole.setAttribute("class", "animation");
              //  obstacle.classList.add("animation")
              //  hole.classList.add("animation")
                obstacle.style.animationPlayState = "running"
                hole.style.animationPlayState = "running"
                index = 0;
            }, 300);
            character.style.top = 100 + "px";

        }
    }


}, 10);



function jump() {
    jumping = true;
    let jumpCounter = 0;

    var jumpInterval = setInterval(function(){
        let top = parseInt(window.getComputedStyle(character).getPropertyValue("top"));

        if((top > 10) && (jumpCounter < 20)) {
            character.style.top = (top - 5) + "px";
            jumpCounter ++;
        }
        else
        {
            jumping = false;
            jumpCounter = 0;
            clearInterval(jumpInterval)
        }
       // jumpCounter ++;
    }, 10);
}
