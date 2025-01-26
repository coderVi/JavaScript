function ZarAt() {
    let zar1 = Math.floor(Math.random() * 6) + 1;
    let zar2 = Math.floor(Math.random() * 6) + 1;

    document.getElementById("z1").src = "./images/z" + zar1 + ".png";
    document.getElementById("z2").src = "./images/z" + zar2 + ".png";
}
