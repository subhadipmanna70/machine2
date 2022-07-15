
login.addEventListener('click', formSubmitHandler);


function formSubmitHandler() {
    let username = document.querySelector("#username").value;
    let password = document.querySelector("#password").value;

    if (username === "Heroku" && password === "PrinceOfPersia") {
        window.location.href = './index.html';
    } else {
        alert("You are a bad hacker💯")
    }
}