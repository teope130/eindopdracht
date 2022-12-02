function both(){
  counting()
  changepic()
};
window.onload = both;//ik start hier de 2 functies tegelijk onload

var numer = Math.floor(Math.random()*10)+1;//hier pak ik een random getal van 0 t/m 9 en doe ik het tot de laagst om heel getal te krijgen daarna doe ik +1 om 1 t/m 10 te hebben

var timer1 = 0


function changepic()//deze functie verandert de foto van de tennissers om de 3 seconden
{
  numer++; if(numer>10) numer=1;

  var pic = "<img src=\"js/foto/foto" + numer + ".png\">";

  document.getElementById("teniser").innerHTML = pic;//hij plakt de code van pic in de div en laat de foto zien

  timer1 = setTimeout("changepic()", 3000);
};

function counting()
{
  var today = new Date();

  var hour = today.getHours();
  if (hour<10)hour = "0"+hour;
  var minut = today.getMinutes();
  if (minut<10)minut = "0"+minut;
  var second = today.getSeconds();
  if (second<10)second = "0"+second;

  document.getElementById("clock").innerHTML =
  +hour+":"+minut+":"+second;

  setTimeout('counting()',1000);
};
