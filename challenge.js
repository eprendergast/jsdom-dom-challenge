
const counter = document.querySelector('#counter');
const pause = document.getElementById('pause');
const start = document.getElementById('pause');
const heart = document.getElementById('heart');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const likes = document.querySelector('.likes');
const commentList = document.getElementById("list")
const commentForm = document.getElementById("comment-form")

document.addEventListener("DOMContentLoaded", () => {

    // Start timer
    counter.innerText = 0;
    myCounter = window.setInterval(increaseCounter, 1000);

    // Add event listener to minus
    minus.addEventListener('click', decreaseCounter)
   
    //Add event listener to plus
    plus.addEventListener('click', increaseCounter)

    //Add event listener to heart
    heart.addEventListener('click', addLike)

    //Add event listener to pause
    pause.addEventListener('click', pauseCounter)

    //Add comment
    commentForm.addEventListener('submit', addComment);
}) 

function increaseCounter() {
    counter.innerText = parseInt(counter.innerText) + 1;
}

function decreaseCounter() {
    counter.innerText = parseInt(counter.innerText) - 1;
}

function pauseCounter() {
    if (pause.innerText == "pause") {
        clearInterval(myCounter);
        pause.innerText = 'resume';
        plus.disabled = true;
        minus.disabled = true;
        heart.disabled = true;
    } else if (pause.innerText == "resume") {
        myCounter = window.setInterval(increaseCounter, 1000);
        pause.innerText = 'pause';
        plus.disabled = false;
        minus.disabled = false;
        heart.disabled = false;
    } else {
        //do nothing
    } 
}

function addLike() {
    let number = counter.innerText
    if (document.getElementById(number) != null) {
        no_of_likes = document.getElementById(number);
        no_of_likes.innerText = `${parseInt(no_of_likes.innerText) + 1} times`;
    } else {
        newLike = likes.appendChild(document.createElement("li"));
        newLike.innerHTML = `${number} has been liked <span id=${number}>1 time</span>`;
    }
} 

function addComment(event) {
    event.preventDefault()
    newComment = commentList.appendChild(document.createElement("p"));
    newComment.innerText = commentForm[0].value
}





