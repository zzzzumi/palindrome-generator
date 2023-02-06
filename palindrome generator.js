let kana = ["あ","い","う","え","お","か","き","く","け","こ","さ","し","す","せ","そ","た","ち","つ","て","と","な","に","ぬ","ね","の","は","ひ","ふ","へ","ほ","ま","み","む","め","も","や","ゆ","よ","ら","り","る","れ","ろ","わ","を","ん","...","！","？","ー","が","ぎ","ぐ","げ","ご","ざ","じ","ず","ぜ","ぞ","だ","ぢ","づ","で","ど","ぱ","ぴ","ぺ","ぽ"];
var num ;
const Number = document.getElementById("number");
const Button = document.getElementById("button");
const Word = document.getElementById("word");

Button.addEventListener("click" ,function (){
    num = Number.value;
    kaibunWord(num);
});

function kaibunWord(num){
    let kaibun = [];
    let kaibunText;
    if(num % 2 == 0){
        var count = num / 2;
        for(var i=1; i<=count; i++){
            var loc = Math.floor(Math.random() * kana.length + 1);
            kaibun[i-1] = kana[loc];
            kaibun[num-i] = kana[loc];
        }
    }
    else{
        var count = Math.floor(num / 2);
        for(var i=1; i<=count; i++){
            var loc = Math.floor(Math.random() * kana.length + 1);     
            kaibun[i-1] = kana[loc];
            kaibun[num-i] = kana[loc];
        }
        kaibun[count] = kana[Math.floor(Math.random() * kana.length + 1)];
    }
    kaibunText = kaibun.join("");
    Word.textContent = kaibunText;
}
