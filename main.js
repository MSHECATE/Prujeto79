menuListArray = 
[
"Pizza Vegetariana",
"Pizza de frango",
"Pizza portuguesa",
"Pizza de quatro queijos",
"Pizza doce",
"Pizza de kebab",
"Pizza de banana"
];

function getMenu(){
var htmldata ="";
menuListArray.sort();
for(var i=0;i<menuListArray.length;i++){
   htmldata=htmldata+ menuListArray[i] + '<br>'
}
document.getElementById("displaymenu").innerHTML = htmldata;
}

function addItem(){
var htmldata;
var imgtags='<img id="im1" src="images/pizzaImg.png"/>'
var item=document.getElementById("addItem").value;
menuListArray.sort();
htmldata=""
for(var i=0;i<menuListArray.length;i++){
    htmldata=htmldata+ menuListArray[i]+'<br>';
}
document.getElementById("displayAddeMenu").innerHTML = htmldata;

}

function addTop(){
var item=document.getElementById("addItem").value;
menuListArray.push(item);
addItem();
}