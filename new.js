function getNum(num){
    console.log(num)
    document.getElementById('res').value += num;

}

function clearScr(){
    document.getElementById('res').value = "";
}

function removeNum(){
    var result = document.getElementById('res').value;
    document.getElementById('res').value = document.getElementById('res').value.slice(0,result.length-1);
}

function getAns(){
    document.getElementById('res').value = eval(document.getElementById('res').value);
    console.log(document.getElementById('res').value);
}