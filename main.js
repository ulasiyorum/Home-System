const signUp = document.getElementById("signIn");
const logInProducer = document.getElementById("producerLogin");
const logInConsumer = document.getElementById("consumerLogin");

console.log("main");
logInConsumer.addEventListener("click",() => {
    window.location.href = "./consumer_login.php";
});

logInProducer.addEventListener("click", () => {
    window.location.href = "./producer_login.php";
});

signUp.addEventListener("click", () => {
    window.location.href = "./register_form.php";
});
