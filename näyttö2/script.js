//Javascript ja jquery//

// jokaista sivua koskevat ominaisuudet:

document.getElementById("foot01").innerHTML =
"<h3 class='yhteystiedot'>Sivun tekijän yhteystiedot:</h3>"+ //voit lisätä uuden laittamalla + merkin, kommentokun lopetetaan lisää ; merkki //
"<p class='yhteystiedot'>Nimi: Jani Karvonen"+
"<p class='yhteystiedot'>puh: 0414337508</p>"+
"<p class='yhteystiedot'><a href='mailto:janikarvonen@hotmail.com'>Tästä sähköpostia sivun tekijälle: Jani Karvonen</a></p>"+
"<p>© Jani Karvonen</p>"+	 //&copy; 
"<p><img  id='yrityslogo' class='yhteystiedot' src='kuvia/yrityslogokotkantie.svg' width='200' height='200'></p>";

// alkuperäinen ilman linkkiä "<p class='yhteystiedot'>email: janikarvonen@hotmail.com"+
document.getElementById("nav01").innerHTML = 
"<ul id='menu'>"+
"<li><a href='index.html'>Etusivu</a></li>"+
"<li><a href='sivu2.html'>Palvelut</a></li>"+
"<li><a href='sivu3.html'>Värien testaus</a></li>"+
"<li><a href='sivu4.html'>Galleria</a></li>"+
"<li><a href='sivu5.html'>Yhteystiedot</a></li>"+
"</ul>";

// Etusivun ominaisuudet:------------------------------------------------------------------

// Palvelut sivun ominaisuudet:-------------------------------------------------------------
// Värien testaus sivun ominaisuudet:--------------------------------------------------------
function valitsin1() //svg kuvan värin valitsin.
{
var varit1=document.getElementById("valikko1").value;
 document.getElementById("seina1").setAttribute("fill",varit1);
}

function valitsin2() //svg kuvan värin valitsin.
{
 var varit2=document.getElementById("valikko2").value;
 document.getElementById("seina2").setAttribute("fill",varit2);
}
// väripaletin säädöt

function palettivalitsin()
{
$( "p" ).click(function() {
  $( this ).slideUp();
});
}

function vasenpal(vari3) //svg kuvan värin valitsin.
{
  document.getElementById("seina2").setAttribute("fill",vari3);
}

function oikeapal(vari4) //svg kuvan värin valitsin.
{
 document.getElementById("seina1").setAttribute("fill",vari4);
}

// Galleria sivun ominaisuudet:---------------------------------------------------------------

// Yhteystiedot sivun ominaisuudet:--------------------------------------------------------------

$(document).ready(function(){
    $("#ytiedot").click(function(){
      $(".yritysosoite").slideToggle("slow");
    });
  });
// ylhäällä yrityksen yhteystiedot esille ominaisuus.

function viestinlahetys()
{
    
    var nimi= document.getElementById("etunimi").value;
    var suku= document.getElementById("sukunimi").value;
    var reason =document.getElementById("syy").value;
    var message=document.getElementById("viesti").value;
    
    alert("Lähetit tiedot onnistuneesti!");

    document.getElementById("raportti").innerHTML=
    "<h1> Lähetetty raportti</h1>"+
    "<p> nimi:"+nimi+"</p>"+
    "<p>sukunimi:"+suku+"</p>"+
    "<p> syy:"+reason+"</p>"+
    "<p> viesti:"+message+"</p>";
}