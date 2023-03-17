function register() {
    // alert("Worked")
    var userName = document.getElementById("name").value;
    var userEmail = document.getElementById("email").value;
    var userPassword = document.getElementById("password").value;
    var userData = { name: userName, email: userEmail, password: userPassword }

    var dataFromLS = JSON.parse(localStorage.getItem("userData")) || [];
    // console.log(dataFromLS, "dataFromLS")
    var flag = false;
    for (var i = 0; i < dataFromLS.length; i++) {
        if (dataFromLS[i].email === userEmail) {
            flag = true;
        }
    }
    if (flag === true) {
        alert("email alredy prsent, type another email")
    } else if (userPassword.length < 1 && userName.length < 1 && userEmail < 1) {
        alert("must fill all fields")
    } else if (userPassword.length < 8) {
        alert("password more than 8 digits")
    } else {
        dataFromLS.push(userData)
        localStorage.setItem("userData", JSON.stringify(dataFromLS));
        document.getElementById("name").value = '';
        document.getElementById("email").value = '';
        document.getElementById("password").value = '';
        // window.location.href = "login.html";
        alert("Registration done.")
    }
}
function login() {
    alert("submit")
    var userEmail = document.getElementById("email").value;
    var userPassword = document.getElementById("password").value;

    var dataFromLS = JSON.parse(localStorage.getItem("userData"));

    var flag = false;
    for (var i = 0; i < dataFromLS.length; i++) {
        if (dataFromLS[i].email === userEmail && dataFromLS[i].password === userPassword) {
            flag = true;
        }
    } if (flag === true) {
        document.getElementById("email").value = '';
        document.getElementById("password").value = '';
        var user = {};
        user["current-user-email"] = userEmail;  
        localStorage.setItem("userEmail",JSON.stringify(userEmail)) 
        // window.location.href = "home.html";
        alert("login done....")

    } else {
        alert("wrong cread plese check email and password")
    }
}

function addProduct(){
    //  alert("work")
    var proName = document.getElementById("name").value;
    var proImage = document.getElementById("image").value;
    var proPrice = document.getElementById("price").value;


    var product = { name:proName, image:proImage, price:proPrice,}
    var proDtaLS = JSON.parse(localStorage.getItem("product")) || [];
    proDtaLS.push(product)
    localStorage.setItem("product", JSON.stringify(proDtaLS));
    alert("done")
}
