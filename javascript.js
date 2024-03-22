const rokje = document.querySelector("#rok")
const tweeRok = document.querySelector(".tweerok")
const spijkerbroek = document.querySelector("#kortebroek")
const spijkerTwee = document.querySelector(".spijkertwee")
const rokjeblauw = document.querySelector("#blauwrok")
const blauwrokjeTwee = document.querySelector(".blauwrokjetwee")
const kleurgympen = document.querySelector("#gympen")
const kleurschoen = document.querySelector(".kleurschoen")
const witteschoen = document.querySelector("#gymwit")
const wittegympen = document.querySelector(".wittegympen")
const croptop = document.querySelector("#shirt")
const shirtTwee = document.querySelector(".shirttwee")
const paarsetop = document.querySelector("#top")
const truitjetwee = document.querySelector(".truitjetwee")
const wittopje = document.querySelector("#topwit")
const topTwee = document.querySelector(".topTwee")
const bruinhaar = document.querySelector("#haarbruin")
const bruinhaarTwee = document.querySelector(".bruinhaartwee")
const haarroze = document.querySelector("#haarroze")
const rozehaarTwee = document.querySelector(".rozehaartwee")

let haarString = ""
let onderkledingString = ""
let bovenkledingString = ""
let schoenenString = ""

// Deze functies zorgen ervoor dat er word gekeken naar de string en er een plaatje komt.
// Deze functies zorgen er ook voor dat het pas zichtbaar word na klikken.
function toonrok(){
    tweeRok.classList.toggle('hidden')
   if(onderkledingString !== ''){
    onderkledingString = '';
   } else{
    onderkledingString = "tweeRok"
   }
}

function toonbroek(){
    spijkerTwee.classList.toggle('hidden')
    if(onderkledingString !== ''){
        onderkledingString = '';
       } else{
        onderkledingString = "spijkerTwee"
       }
}

function toonblauw(){
    blauwrokjeTwee.classList.toggle('hidden')
    if(onderkledingString !== ''){
        onderkledingString = '';
       } else{
        onderkledingString = "blauwrokjeTwee"
       }
}

function toonschoen(){
    kleurschoen.classList.toggle('hidden')
    if(schoenenString !== ''){
        schoenenString = '';
       } else{
       schoenenString = "kleurschoen"
       }
}

function toongympen(){
    wittegympen.classList.toggle('hidden')
    if(schoenenString !== ''){
        schoenenString = '';
       } else{
       schoenenString = "wittegympen"
       }
}

function toonshirt(){
    shirtTwee.classList.toggle('hidden')
    if(bovenkledingString !== ''){
        bovenkledingString = '';
       } else{
       bovenkledingString = "shirtTwee"
       }
}

function toontop(){
    truitjetwee.classList.toggle('hidden')
    if(bovenkledingString !== ''){
        bovenkledingString = '';
       } else{
       bovenkledingString = "truitjetwee"
       }
}

function toonwit(){
    topTwee.classList.toggle('hidden')
    if(bovenkledingString !== ''){
        bovenkledingString = '';
       } else{
       bovenkledingString = "topTwee"
       }
}

function toonbruinhaar(){
    bruinhaarTwee.classList.toggle('hidden')
    if(haarString !== ''){
        haarString = '';
       } else{
       haarString = "bruinhaarTwee"
       }
}

function toonrozehaar(){
    rozehaarTwee.classList.toggle('hidden')
    if(haarString !== ''){
        haarString = '';
       } else{
       haarString = "rozehaarTwee"
       }
}

spijkerbroek.addEventListener('click', toonbroek)
rokje.addEventListener('click', toonrok)
rokjeblauw.addEventListener('click', toonblauw)
kleurgympen.addEventListener('click', toonschoen)
witteschoen.addEventListener('click', toongympen)
croptop.addEventListener('click', toonshirt)
paarsetop.addEventListener('click', toontop)
wittopje.addEventListener('click', toonwit)
bruinhaar.addEventListener('click', toonbruinhaar)
haarroze.addEventListener('click', toonrozehaar)


let cijfers = document.querySelector("p")
let cijfer = document.querySelector(".cijfer")
const button = document.querySelector('.cijfer')
const audiomooi = document.getElementById('geluidmooi')
const audiolelijk = document.getElementById('geluidlelijk')

let willekeurigNummer = Math.random() *10 
willekeurigNummer = Math.floor(willekeurigNummer)

//  Deze functie zorgt dat in de pagina een cijfer en een stukje tekst te zien is.
function Beoordeling(){
    cijfers.textContent = "je cijfer is een" + willekeurigNummer
 }

function afspelen(){
    if (willekeurigNummer > 5){
       audiomooi.play() // dit geluid speelt af bij een cijfer boven de 5       https://noaheakin.medium.com/adding-sound-to-your-js-web-app-f6a0ca728984#:~:text=The%20simplest%20way%20to%20add,starts%20playing%20the%20current%20audio.

    } else{
      audiolelijk.play() // dit geluid speelt af bij een cijfer 5 of lager      https://www.w3schools.com/jsref/dom_obj_audio.asp
    } 
}

cijfer.addEventListener('click', Beoordeling)
button.addEventListener('click', afspelen)

let knop = document.querySelector("#rodeloperachtergrond")
let klaar = document.querySelector("#klaar")
let knopStatus = false

// in deze functie veranderd de pagina die getoond word.
function paginaVerandering(){
    if(knopStatus == false){
        knopStatus = false
        document.querySelector("#eerstepagina").style.display = "none";
        document.querySelector("#rodeloperachtergrond").style.display = "block";
    } else{
        knopStatus = true
        document.querySelector("#eerstepagina").style.display = "block";
        document.querySelector("#rodeloperachtergrond").style.display = "none";
    }
    
function toonGekozenKleding(){
    if (onderkledingString === 'tweeRok'){
        document.querySelector('.eindrok').classList.remove('hidden')
    } else if( onderkledingString === 'spijkerTwee'){
        document.querySelector('.eindSpijkerTwee').classList.remove('hidden')
    } else if(onderkledingString === 'blauwrokjeTwee'){
            document.querySelector('.eindblauweRok').classList.remove('hidden')
    }
    }
        toonGekozenKleding();
    
function toonGekozenSchoenen(){
    if(schoenenString === 'kleurschoen'){
        document.querySelector('.eindKleurSchoen').classList.remove('hidden')
    } else if(schoenenString === 'wittegympen'){
        document.querySelector('.eindWitteSchoen').classList.remove('hidden')
    }
    }
    toonGekozenSchoenen()

function toonGekozenBovenstuk(){
    if(bovenkledingString === 'shirtTwee'){
        document.querySelector('.eindShirt').classList.remove('hidden')
    } else if(bovenkledingString === 'truitjetwee'){
        document.querySelector('.eindTrui').classList.remove('hidden')
    } else if(bovenkledingString === 'topTwee'){
        document.querySelector('.eindtopje').classList.remove('hidden')
    }
}
    toonGekozenBovenstuk()

function toonGekozenHaar(){
    if(haarString === 'bruinhaarTwee'){
        document.querySelector('.eindhaarbruin').classList.remove('hidden')
    }else if(haarString === 'rozehaarTwee'){
        document.querySelector('.eindhaarroze').classList.remove('hidden')
    }
}
    toonGekozenHaar()
}

klaar.addEventListener('click', paginaVerandering)

