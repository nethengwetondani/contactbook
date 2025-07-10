

let rootpath = "https://mysite.itvarsity.org/api/ContactBook/";
let apikey = checkApikey();

function checkApikey(){
    if (!localStorage.getItem("apiKey")) {
        window.open("enter-api-key.html", "_self");
    }
    return localStorage.getItem("apiKey");
}