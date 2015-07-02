
//Tilføjer "Last modified" til footeren. innerHTML Sørger for at alt text i footeren ikke bliver erstatten 
var footerNode = document.getElementById("footer");
var newHtml = footerNode.innerHTML + "<p>Last modified: " + document.lastModified + "</p>";
footerNode.innerHTML = newHtml;

//Laver en "Alert" når musen bevæger sig over texten i "contentText"s
var MouseOverContent = document.getElementById("contentText");
MouseOverContent.addEventListener("mouseover", function() { alert("Concerts sell out quickly so act fast!") });

//Åbner en ny tab når man trykker på billederne
var melanie = document.getElementById("MelaniePic");
melanie.addEventListener("click", function (event) {
    event.preventDefault();
    var newWin = window.open(melanie.href);
});

var greg = document.getElementById("GregPic");
greg.addEventListener("click", function (event) {
    event.preventDefault();
    var newWin = window.open(greg.href);
});

//Fremhæver menu text
var menuText = document.getElementsByClassName("menu");
for (i = 0; i < menuText.length; i++) {
    menuText[i].addEventListener("mouseover", function (event) {
        var target = event.target || event.srcElement;
        target.className = "menuEnhanced"; //Bruger ny style fra Style.css
    });
    menuText[i].addEventListener("mouseout", function (event) {
        var target = event.target || event.srcElement;
        target.className = "menu";
    });
};