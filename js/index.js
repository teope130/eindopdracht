window.onload = counting; //deze code start de functie counting op het openen van de pagina
function counting()
{
  var today = new Date();

  //in de hiernavolgende var haal ik de uur minuten en seconden van de computer en zet ik het in een variable
  var hour = today.getHours();
  if (hour<10)hour = "0"+hour;
  var minut = today.getMinutes();
  if (minut<10)minut = "0"+minut;
  var second = today.getSeconds();
  if (second<10)second = "0"+second;

  document.getElementById("clock").innerHTML =
  hour+":"+minut+":"+second; //hier verander ik de div clock in de klok die ik heb

  setTimeout('counting()',1000);//het reload elke seconde de functie
};
