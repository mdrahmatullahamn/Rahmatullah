
window.onload=function(){
    alert("worked")
    var goLS = JSON.parse(localStorage.getItem("product"));
    var atdataLS = document.getElementById("showing");


    
    var array = []
    for (var i = 0; i < goLS.length; i++) {
        array += `<div><img src="${goLS[i].image}" alt=""><h1>${goLS[i].name}</h1><p>${goLS[i].price}</p><button onclick='addToCart(${JSON.stringify(goLS[i])})'>Add to cart</button></div>`

    }

    atdataLS.innerHTML = array
    
}

function addToCart(pro){
    var products = JSON.stringify(pro);
    var dataFromLS = JSON.parse(localStorage.getItem("userData"));
    var currentUser = JSON.parse(localStorage.getItem("userEmail"));
    if(currentUser){
        var allUser = [];
        for(var i=0; i<dataFromLS.length;i++){
            if(dataFromLS[i].email===currentUser["current-user-email"]){
                var newObj = dataFromLS[i];
                newObj["cartProducts"] = newObj["cartProducts"] || [];
                newObj["cartProducts"].push(JSON.parse(products));
                allUser.push(newObj)
            }else{
                allUser.push(dataFromLS[i])
            }
        }
        localStorage.setItem("userData",JSON.stringify(allUser));
        alert("product added to cart")
    }else{
        alert("login first to add products add to cart")
    }
}
