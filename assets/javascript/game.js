// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAekwALwteSqItrj_X8AC-JqEhJVcK8WDA",
    authDomain: "my-demo-project-7f718.firebaseapp.com",
    databaseURL: "https://my-demo-project-7f718.firebaseio.com",
    projectId: "my-demo-project-7f718",
    storageBucket: "my-demo-project-7f718.appspot.com",
    messagingSenderId: "315601441848",
    appId: "1:315601441848:web:53fa0a5515f766bc9f42cd",
    measurementId: "G-R3GDC8M13Q"
};

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

initApp = function() {
    firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var uid = user.uid;
        var phoneNumber = user.phoneNumber;
        var providerData = user.providerData;
        user.getIdToken().then(function(accessToken) {
        document.getElementById('sign-in-status').textContent = 'Signed in';
        document.getElementById('sign-in').textContent = 'Sign out';
        document.getElementById('account-details').textContent = JSON.stringify({
            displayName: displayName,
            email: email,
            emailVerified: emailVerified,
            phoneNumber: phoneNumber,
            photoURL: photoURL,
            uid: uid,
            accessToken: accessToken,
            providerData: providerData
        }, null, '  ');
        });
    } else {
        // User is signed out.
        document.getElementById('sign-in-status').textContent = 'Signed out';
        document.getElementById('sign-in').textContent = 'Sign in';
        document.getElementById('account-details').textContent = 'null';
    }
    }, function(error) {
    console.log(error);
    });
};

window.addEventListener('load', function() {
    initApp();
});


// caching the DOM: storing these into variables for later

var userScore = 0;
var computerScore = 0;
var userScore_span = document.getElementById("user-score");
var computerScore_span = document.getElementById("computer-score");
var scoreBoard_div = document.querySelector(".score-board");
var result_p = document.querySelector(".result > p");
var rock_div =  document.getElementById("r");
var paper_div =  document.getElementById("p");
var scissor_div =  document.getElementById("s");
var rock_div2 =  document.getElementById("r2");
var paper_div2 =  document.getElementById("p2");
var scissor_div2 =  document.getElementById("s2");



function getComputerChoice(){
    var choices = ['r', 'p','s'];
    var randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}
console.log(getComputerChoice);


function convertToWord(letter){
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissor";
}




function win(userChoice, computerChoice){
    var subUser = "User: ";
    var subComp = "Comp: ";
    var userChoice_div = document.getElementById(userChoice);

    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `|${subUser}${convertToWord(userChoice)}| beats |${subComp}${convertToWord(computerChoice)}|`
    // userChoice_div.classList.add('green-glow');
    // document.getElementById(userChoice).classList.add('green-glow');
    // setTimeout(function(){userChoice_div.classList.remove('green-glow')}, 300);
}




function lose(userChoice, computerChoice){
    var subUser = "User: ";
    var subComp = "Comp: ";
    var userChoice_div = document.getElementById(userChoice);

    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `|${subUser}${convertToWord(userChoice)}| loses |${subComp}${convertToWord(computerChoice)}|`
    // userChoice_div.classList.add('red-glow');
    // document.getElementById(userChoice).classList.add('red-glow');
    // setTimeout(function(){userChoice_div.classList.remove('red-glow')}, 300);
}


function draw(userChoice, computerChoice){
    var subUser = "User: ";
    var subComp = "Comp: ";
    var userChoice_div = document.getElementById(userChoice);

    result_p.innerHTML = `|${subUser}${convertToWord(userChoice)}| is tied to |${subComp}${convertToWord(computerChoice)}|`
    // userChoice_div.classList.add('blue-glow');
    // document.getElementById(userChoice).classList.add('blue-glow');
    // setTimeout(function(){userChoice_div.classList.remove('blue-glow')}, 300);
}



function game(userChoice, computerChoice){
    var computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        // first case scenario is when user wins
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        // second case scenario is when user loses
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        // third case scenario is when its a tie
        case "rr":
        case "pp":
        case "ss":
        draw(userChoice, computerChoice);
            break;
    }
}




// this will call the named function below
main();

//a wrapper function to wrap the buttons' functionality
function main (){

// now buttons working
    rock_div.addEventListener('click', function() {
    console.log("you clicked on the left rock");
    game("r");
    //this will the function called game that will do something when the r button is clicked
    })

    paper_div.addEventListener('click', function() {
    console.log("you clicked on the left paper");
    game("p");
    })

    scissor_div.addEventListener('click', function() {
        console.log("you clicked on the left scissor");
        game("s");
    })

    rock_div2.addEventListener('click', function() {
        console.log("you clicked on the left rock");
        game("r");
        //this will the function called game that will do something when the r button is clicked
    })
    
        paper_div2.addEventListener('click', function() {
        console.log("you clicked on the left paper");
        game("p");
    })
    
        scissor_div2.addEventListener('click', function() {
            console.log("you clicked on the left scissor");
            game("s");
    })
}




// set the left images to user choice
// set the right images to computer choice
// then using .css change the background color of the selected images to indicate that it has been selected
