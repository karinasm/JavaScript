class Osoba{
    constructor(name, surname){
        this.baseName=name;
        this.baseSurname=surname;
    }

    przedstawOsobe(){
        return `Mam na imię ${this.baseName} ${this.baseSurname}`;
    }
}

let osoba1 = new Osoba('Maks','Kowalski');
let osoba2 = new Osoba('Ola','Nowak');
osoba1.kolorOczu='niebieski';
osoba2.kolorOczu='zielony';

osoba1.jakiJestKolorOczu=()=>{
    return osoba1.kolorOczu;
}
osoba2.jakiJestKolorOczu=()=>{
    return osoba2.kolorOczu;
}
console.log(osoba1.przedstawOsobe() + " , mój kolor oczu to " + osoba1.jakiJestKolorOczu());
console.log(osoba2.przedstawOsobe() + " , mój kolor oczu to " + osoba2.jakiJestKolorOczu());