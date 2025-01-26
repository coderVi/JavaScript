function basla() {
    let hak = 10;
    let tahmin = Math.floor(Math.random() * 100) + 1;

    function tahminYap() {
        if (hak > 0) {
            let sayi = prompt("Lütfen tahmin ettiğiniz sayıyı giriniz: ");
            let girilenSayi = parseInt(sayi);

            if (girilenSayi === tahmin) {
                alert("Tahmin doğru, tebrikler!");
                hak = 0;
            } else if (girilenSayi >= tahmin - 3 && girilenSayi <= tahmin + 3) {
                document.getElementById("cevap").innerHTML = '<p class="h-3 bg-danger text-center kalin p-2">Çok Sıcak</p>';
                hak--;
                setTimeout(tahminYap, 2000);
            } else if (girilenSayi >= tahmin - 10 && girilenSayi <= tahmin + 10) {
                document.getElementById("cevap").innerHTML = '<p class="h-3 bg-warning text-center kalin p-2">Sıcak</p>';
                hak--;
                setTimeout(tahminYap, 2000);
            } else {
                document.getElementById("cevap").innerHTML = '<p class="h-3 bg-primary text-center kalin p-2">Soğuk</p>';
                hak--;
                setTimeout(tahminYap, 2000);
            }
        } else {
            alert("Hakkınız doldu! Doğru cevap: " + tahmin.toString());
        }
    }

    tahminYap();
}
