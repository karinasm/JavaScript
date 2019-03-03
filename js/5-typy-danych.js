let typLiczba = 10 + 10;

// typLiczba='10' + 10 + 20;

// typLiczba=`10+10=${10+10}`;
// typLiczba=`10 + `+`10 = `+ (10 + 10);

//typ boolean
// typLiczba =4+4 === 8;
// console.log(typLiczba);

let tablica=['Ania', 'Ola ma kota', 'Basia', 'Michał','Marek'];
// tablica[1]='Ola ma czarnego kota';
// tablica[1]={imie: 'Ola', ma: 'czarneg kota'};

// tablica.reverse();
tablica.unshift('Ooooops'); //dodaje elementy na poczatku []
tablica.shift(); //usuwa pierwszy element z []

tablica.push('Oooooops'); //dodajemy element na końcu
tablica.pop(); // usuwamy na końcu

//let wynik = tablica.slice(1,3); - nie modyfukuje oryginalej
 //ta metoda wycina nam kawałek tablicy (takie kopiuj wklej, gdyz pozostaje tablica taka sama)

//tablica.splice(1,3) zmodyfikuje nam tablice, nie będzie już taka sama; wcielam indeksy 0d 1-3 i już moja nowa 
//tablica to ta która posiada te trzy nowe indeksy, a tej starej pozostają 2

// tablica.splice(1,3);
tablica.splice(3,1,'Daria'); 
let tablicaLiczba=[1,-1,76,338,0];

//tablica.sort();
tablicaLiczba=tablicaLiczba.sort((liczba1,liczba2)=>{
    return liczba1 - liczba2;
});

console.log(tablicaLiczba);
// console.log(wynik);

// let przykladowyObiekt={id: 3, imie: 'Kacper'};
// console.log(przykladowyObiekt.id);