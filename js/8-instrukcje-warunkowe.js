let wynik = 10 + 10 === 20 ? 'prawda' : 'fałsz'; //ternary

let kolor='czarny';

if(kolor==='niebieski'){
    console.log(kolor)
}
else if(kolor==='fioletowy'){
    console.log(kolor);
}
else if(kolor==='czarny'){
    console.log(kolor);
}
else{
    console.log('nie ma takiego koloru');
}
// console.log(wynik);

//drugi sposób switchem
switch (kolor){
    case 'niebieski':
    console.log(kolor);
    break;
    case 'fioletowy':
    console.log(kolor);
    break;
    case 'czarny':
    console.log(kolor);
    break;
    default:
    console.log('nie ma takiego koloru');
}