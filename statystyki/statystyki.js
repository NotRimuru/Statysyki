const kategorie = [
    ['Zakupy przez internet', 'mediumpurple', '<img src="../../Icons/Cart.png" style = "filter: invert(47%) sepia(84%) saturate(397%) hue-rotate(217deg) brightness(91%) contrast(88%); height: 5.3lvh; width: 5.3lvh;">'],
    ['Artykuły spożywcze', 'salmon', '<img src="../../Icons/Apple.png" style = "filter: invert(69%) sepia(37%) saturate(2832%) hue-rotate(314deg) brightness(101%) contrast(96%); height: 4lvh; width: 4lvh;">'],
    ['Transport', 'powderblue', '<img src="../../Icons/Canister.png" style = "filter: invert(91%) sepia(14%) saturate(577%) hue-rotate(140deg) brightness(97%) contrast(86%); height: 4lvh; width: 4lvh;">'],
    ['Odzież', 'turquoise', '<img src="../../Icons/Shirt.png" style = "filter: invert(89%) sepia(17%) saturate(1592%) hue-rotate(107deg) brightness(93%) contrast(88%); height: 5.4lvh; width: 5.4lvh;">'],
    ['Obuwie', 'chocolate', '<img src="../../Icons/Boot.png" style = "filter: invert(48%) sepia(97%) saturate(1418%) hue-rotate(350deg) brightness(86%) contrast(89%); height: 5lvh; width: 5lvh;">'],
    ['Urzadzenia ekeltryczne', 'gold','<img src="../../Icons/Lightning.png" style = "filter: invert(79%) sepia(44%) saturate(922%) hue-rotate(359deg) brightness(102%) contrast(104%); height: 5.4lvh; width: 5.4lvh;">'],
    ['Artykuły kosmetyczne', 'plum', '<img src="../../Icons/Lipstick.png" style = "filter: invert(88%) sepia(73%) saturate(873%) hue-rotate(210deg) brightness(87%) contrast(100%); height: 5lvh; width: 5lvh;">'],
    ['Przelew wewnętrzny', 'lime', '<img src="../../Icons/Banknote.png" style = "filter: invert(88%) sepia(20%) saturate(1864%) hue-rotate(66deg) brightness(99%) contrast(105%); height: 7lvh; width: 7lvh;">'],
    ['Inne', 'Silver', '<img src="../../Icons/Canister.png" style = "filter: invert(91%) sepia(14%) saturate(577%) hue-rotate(140deg) brightness(97%) contrast(86%); height: 5lvh; width: 5lvh;">'],
];

const nazwyDni = [
    'Niedziela',
    'Ponidziałek',
    'Wtorek',
    'Środa',
    'Czwartek',
    'Piątek',
    'Sobota',
];

const wychodzaceNazwy = [
    ['Steam', kategorie[0][0]],
    ['Lidl', kategorie[1][0]],
    ['Biedronka', kategorie[1][0]],
    ['Rossmann', kategorie[6][0]],
    ['Orlen', kategorie[2][0]],
    ['BP', kategorie[2][0]],
    ['Shell', kategorie[2][0]],
    ['Reserved', kategorie[3][0]],
    ['H&M', kategorie[3][0]],
    ['CCC', kategorie[4][0]],
    ['MediaMarkt', kategorie[5][0]],
    ['RTV Euro AGD', kategorie[5][0]],
    ['Hebe', kategorie[6][0]],
    ['Kaufland', kategorie[1][0]],
    ['Carrefour', kategorie[1][0]],
    ['Epic Games Store', kategorie[0][0]],
    ['Ubisoft Connect', kategorie[0][0]],
    ['BattleNet', kategorie[0][0]],
];

const przychodzaceNazwy = [
    ['Babcia', kategorie[7][0]],
    ['Mama', kategorie[7][0]],
    ['Tata', kategorie[7][0]],
    ['Pracodawca', kategorie[7][0]],
];

function wygenerujTransakcje(ilosc, rodzaj, lista, saldo, listaZTransakcjami = []) {
    if(rodzaj == 'losowo'){
        for (let i = 0; i < ilosc; i++) {
            let kwota;
            do{
                kwota = (Math.random() * 1001) - 500;
            }while(kwota == 0);
            
            if(saldo + kwota < 0){
                kwota *= -1;
            }

            let nazwa, kategoria;
            if(kwota > 0){
                const losowyNum = Math.floor(Math.random() * (przychodzaceNazwy.length));
                nazwa = przychodzaceNazwy[losowyNum][0];
                kategoria = przychodzaceNazwy[losowyNum][1];
            }
            else{
                const losowyNum = Math.floor(Math.random() * (wychodzaceNazwy.length));
                nazwa = wychodzaceNazwy[losowyNum][0];
                kategoria = wychodzaceNazwy[losowyNum][1];
            }
            const data = losowaDataWZasiegu(360);

            saldo += kwota;
            lista.push([kwota, nazwa, kategoria, data]);
        }
    }
    else if(rodzaj == 'lista'){
        saldo += listaZTransakcjami[3];
        lista.push([listaZTransakcjami[3], listaZTransakcjami[0], listaZTransakcjami[2], new Date()]);        
    }
}

function losowaDataWZasiegu(liczbaDni) {
    const data = new Date;
    return new Date(data.getTime() - Math.floor(Math.random()*liczbaDni*24*60*60*1000));
}

function numerDniPomiedzyDatami(data1, data2) {
    const diff = data1.getTime() - data2.getTime();
    return Math.floor(diff / (1000 * 60 * 60 * 24));
}

function wygenerujStatystyki(tylkoMiesiac = null, lista){
    let kategorieTransakcji = [];
    let statystykiKategorii = [];
    let suma = 0;

    for(let i = 0; i < lista.push(); i++){
        const dataDzis = new Date()
        if((numerDniPomiedzyDatami(lista[i][3], dataDzis) >= 30 && tylkoMiesiac != null) || lista[i][0] > 0) continue;
        let check = false;
        let num, kwota;
        num = 0;

        for(let j = 0; j < kategorieTransakcji.push(); j++){
            if(kategorieTransakcji[j] == lista[i][2]){                       
                check = true;
                kwota = lista[i][0];
                break;
            }
            num ++;
        }

        if(check == true){
            statystykiKategorii[num][0] += 1;
            statystykiKategorii[num][2] += -kwota;
        }

        else{
            kategorieTransakcji.push(lista[i][2]);
            statystykiKategorii.push([1, kategorieTransakcji[kategorieTransakcji.length - 1], -lista[i][0]]);
        }

        suma += -lista[i][0];
    }
    for(let i = 0; i < statystykiKategorii.length; i ++){
        const procent = (statystykiKategorii[i][2] / suma) * 100;
        const procentInt = Math.round(procent);
        statystykiKategorii[i][0] = procentInt;
    };

    return {statystykiKategorii, suma};
}

function wyswietlStatystyki(statystykiKategorii, suma, num){
    const statystykiDiv = document.getElementsByClassName('statistic-list')[num];
    statystykiDiv.innerHTML = '';

    const statystykaDivSzablon = `
        <div class = 'statistic'>
            <div class = "obrazek"></div>
            <div class = 'statistic-container'>
                <div class = 'statistic-bar'>
                    <div class = 'statistic-progress'></div>
                </div>
                <div class = 'nazwa-kategorii'></div>
            </div>
            <div class = 'kwota-kategorii'></div>
        </div>`
    
    for(let i = 0; i < statystykiKategorii.length; i++){
        let icon, color;
        for(let j = 0; j < kategorie.length; j++){
            if(statystykiKategorii[i][1] == kategorie[j][0]){
                icon = kategorie[j][2];
                color = kategorie[j][1];
                break;
            }
        }
        statystykiDiv.innerHTML += statystykaDivSzablon;
        
        const statystyka = document.getElementsByClassName('statistic')[i];
        const obrazek = statystyka.getElementsByClassName('obrazek')[0];
        const progress = statystyka.getElementsByClassName('statistic-progress')[0];
        const container = statystyka.getElementsByClassName('statistic-container')[0]; 
        const nazwaKategorii = statystyka.getElementsByClassName('nazwa-kategorii')[0]; 
        const kwotaKategorii = statystyka.getElementsByClassName('kwota-kategorii')[0]; 
        const wydatki = document.getElementsByClassName('wydatki')[0]; 


        kwotaKategorii.style.color = color;
        nazwaKategorii.style.color = color;
        progress.style['background-color'] = color;

        progress.style.width = `${statystykiKategorii[i][0]}%`;
        nazwaKategorii.innerHTML = statystykiKategorii[i][1];
        kwotaKategorii.innerHTML += `${(statystykiKategorii[i][0]).toFixed(2)} PLN`;

        obrazek.innerHTML = icon;

        wydatki.innerHTML = `${suma.toFixed(2)} PLN`;
    }
}
