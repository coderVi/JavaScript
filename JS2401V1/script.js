function cevapKontrol(){
    var myQuiz = document.getElementById("quizz");
    if(myQuiz[1].checked){
        alert("Cevap Doğru");
    }
    else{
        alert("Yanlış Cevap");
    }
    
}