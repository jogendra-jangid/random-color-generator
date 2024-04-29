// let btn = document.querySelector("button");

// btn.addEventListener("click", function(){
//     let h3 = document.querySelector("h3");
//     let randomColor = getRandomColor();
//     h3.innerText = randomColor;
//     console.log("New color updated");
//     let div = document.querySelector("div");
//     div.style.backgroundColor = randomColor;
// })


// function getRandomColor(){
//     let red = Math.floor(Math.random() * 255);
//     let green = Math.floor(Math.random() * 255);
//     let blue = Math.floor(Math.random() * 255);

//     let color = `rgb(${red}, ${green}, ${blue})`;
//     return color;
// }



// this is chat gpt



let btn = document.querySelector("button");
let clickCount = 0; // Variable to track the number of button clicks
let h1 = document.querySelector("h1");
let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");
let divp = document.querySelector("div p")
let h4 = document.querySelector("h4");


btn.addEventListener("click", function(){
    if (clickCount < 10) {
        clickCount++;
        let h3 = document.querySelector("h3");
        let randomColor = getRandomColor();
        h3.innerText = randomColor;
        console.log("New color updated");
        let div = document.querySelector("div");
        div.style.backgroundColor = randomColor;
    } else {
        h4.style.opacity = "1";
        noCredits();
        console.log("You have generated 10 free random colors. refresh for more colors");
        // Enable button click event here if needed
        // btn.addEventListener("click", generateRandomColor);
    }
});

function getRandomColor(){
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}

function noCredits(){
    let noCredits = h1.style.display = "block";
    h1.style.color = "rgb(190, 0, 248)";
    h2.style.display = "none";
    h3.style.display = "none";
    btn.style.display = "none";
    div.innerText = "this is last color";
    
}



