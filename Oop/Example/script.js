class Urunler{
    constructor(urunAdi, urunFiyat, adedi){
        this.urunAdi = urunAdi;
        this.urunFiyat = urunFiyat;
        this.adedi = adedi;
    }

    totalPrice = function(){
        return this.urunFiyat * this.adedi;
    }

    totalPriceWithTax(oran){
        return this.totalPrice()* oran / 100 + this.totalPrice();
    }


}

const urun = new Urunler("çilek",200,6);
console.log(urun.totalPrice());
console.log(urun.totalPriceWithTax(20));