document.getElementById("signin-button").addEventListener("click", function() {
    alert("Sign In Clicked");
});

document.getElementById("twitter-login").addEventListener("click", function() {
    alert("Twitter Login Clicked");
});

document.getElementById("terms-checkbox").addEventListener("change", function() {
    if (this.checked) {
        alert("Terms checkbox checked");
    } else {
        alert("Terms checkbox unchecked");
    }
});

document.getElementById("learn-more-button").addEventListener("click", function() {
    alert("Learn More Clicked");
});

document.getElementById("purchase-button").addEventListener("click", function() {
    alert("Purchase Clicked");
});
