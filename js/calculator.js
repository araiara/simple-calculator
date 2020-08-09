
//function that display value 
var temp;
function display(val) { 
    temp = document.getElementById('result').value+=val;
}

function solution() {
    var solve = eval(temp);
    document.getElementById('result').value = solve;
}