function topla(){
    s1 = parseInt(document.getElementById('sayi1').value);
    s2 = parseInt(document.getElementById('sayi2').value);
    
    document.getElementById('sonuc').value = s1+ s2;
}

function cikar(){
    s1 = parseInt(document.getElementById('sayi1').value);
    s2 = parseInt(document.getElementById('sayi2').value);
    
    document.getElementById('sonuc').value = s1 - s2;
}

function carp(){
    s1 = parseInt(document.getElementById('sayi1').value);
    s2 = parseInt(document.getElementById('sayi2').value);
    
    document.getElementById('sonuc').value = s1 * s2;
}

function bol(){
    s1 = parseInt(document.getElementById('sayi1').value);
    s2 = parseInt(document.getElementById('sayi2').value);
    
    if(s2 !== 0){
        sonuc = s1 / s2;
    }
    else{
        sonuc = 'Sıfıra bölme hatası';
    }
    document.getElementById('sonuc').value = sonuc;

}


function hesapla() {
    var boy = parseInt(document.getElementById("Boy").value);
    var kilo = parseInt(document.getElementById("Kilo").value);
    var dYil = parseInt(document.getElementById("dYili").value);
    var cins = document.getElementById("cinsiyet").value;
    var tarih = new Date();
    var yas = tarih.getFullYear() - dYil;

    var k;

    if (cins === "e" || cins == "E") {
        k = 0.9;
    } else if (cins === "k" || cins == "K") {
        k = 0.8;
    } else {
        k = 0;
    }

    var ideal = (boy - 100 + yas / 10) * k;

    if (ideal == kilo) {
        document.getElementById('hesap').innerHTML = "Fit ... " + "<h1>" + ideal + "</h1>";
    } else if (ideal < kilo) {
        document.getElementById('hesap').innerHTML = "Şişko ... " + "<h1>" + ideal + "</h1>";
    } else {
        document.getElementById('hesap').innerHTML = "Zayıf ... " + "<h1>" + ideal + "</h1>";
    }
}

   