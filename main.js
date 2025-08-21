
const userAuth = localStorage.getItem("userAuth");
if(user){
    const parsedUser = JSON.parse(userAuth);
    document.getElementById("signUpButton").classList.remove("hidden")
} else {
    document.getElementById("welcomeMessage").innerHTML = `Hello, please <a href="./index.html">Sign Up</a>`;
}
document.getElementById()