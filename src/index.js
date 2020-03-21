module.exports = function toReadable (number) {
    str = '';
    let z = number;
    if (z == 0) {return 'zero'}
    let x = number % 10;
    let y = number % 100;
    if (z >= 100 && z < 200){str = str + 'one hundred';}
    if (z >= 200 && z < 300){str = str + 'two hundred';}
    if (z >= 300 && z < 400){str = str + 'three hundred';}
    if (z >= 400 && z < 500){str = str + 'four hundred';}
    if (z >= 500 && z < 600){str = str + 'five hundred';}
    if (z >= 600 && z < 700){str = str + 'six hundred';}
    if (z >= 700 && z < 800){str = str + 'seven hundred';}
    if (z >= 800 && z < 900){str = str + 'eight hundred';}
    if (z >= 900 && z <= 999){str = str + 'nine hundred';}
    if (y >= 10 && z > 100){str = str + ' '}
    if (y >= 10 && y < 20) {
        if (y == 10){str = str + 'ten';}
        if (y == 11){str = str + 'eleven';}
        if (y == 12){str = str + 'twelve';}
        if (y == 13){str = str + 'thirteen';}
        if (y == 14){str = str + 'fourteen';}
        if (y == 15){str = str + 'fifteen';}
        if (y == 16){str = str + 'sixteen';}
        if (y == 17){str = str + 'seventeen';}
        if (y == 18){str = str + 'eighteen';}
        if (y == 19){str = str + 'nineteen';}
    }
    else{
        if (y >= 20 && y < 30) {str = str + 'twenty';}
        if (y >= 30 && y < 40) {str = str + 'thirty';}
        if (y >= 40 && y < 50) {str = str + 'forty';}
        if (y >= 50 && y < 60) {str = str + 'fifty';}
        if (y >= 60 && y < 70) {str = str + 'sixty';}
        if (y >= 70 && y < 80) {str = str + 'seventy';}
        if (y >= 80 && y < 90) {str = str + 'eighty';}
        if (y >= 90 && y <= 99) {str = str + 'ninety';}
        if (x != 0 && z > 10){
            str = str + ' ';}
            if (x == 1){str = str + 'one';}
            if (x == 2){str = str + 'two';}
            if (x == 3){str = str + 'three';}
            if (x == 4){str = str + 'four';}
            if (x == 5){str = str + 'five';}
            if (x == 6){str = str + 'six';}
            if (x == 7){str = str + 'seven';}
            if (x == 8){str = str + 'eight';}
            if (x == 9){str = str + 'nine';}
    }  
    return str
}
