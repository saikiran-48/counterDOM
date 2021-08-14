var counter = document.querySelector(".counter");


var followers = document.querySelector(".followers");
console.log(followers)

let count = 1;

function increment(){

    if (count < 1000) {
        count++;
        counter.innerText = count;
    }
    
}

// let count = 1;

setInterval(increment , 5);


setTimeout(()=> {
    followers.innerText = "Followers in Instagram!";

},6000 )
