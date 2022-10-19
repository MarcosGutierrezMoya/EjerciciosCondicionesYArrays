// =========Ejercicios Daniel==============
//#region =========Númericos==============

// ======= 1) Área y perímetro=======
function areaOfCircle(PI, radius) {
	return PI*Math.pow(radius,2);
}

function perimeterOfCircle(PI, radius) {
	return 2 * PI * radius;
}

// ======= 2) Velocidad=======

function calcSpeed(distance, time) {
	return distance / time;
}

// ======= 3) Número random=======

function randomNum(minNum, maxNum) {
	return Math.random() * (maxNum - minNum) + minNum;
}

// ======= 4) Número random=======

function getMaxAndMin(a, b, c, d, e, f, g) {
	return "El mínimo es: " + Math.min(a, b, c, d, e, f, g) + " y el máximo es: " + Math.max(a, b, c, d, e, f, g);
}
console.log(getMaxAndMin(8, 1, 4, 7, 3, 9, 6));

// ======= 5) Millas en KM a la baja=======

function toMiles(num) {
    return Math.floor(num * 1.60934).toFixed(2);
}
console.log(toMiles(1));

// ======= 6) Millas en KM a la baja=======

function pyramidArea(length, height) {
	return (length * length) + (4*((length*height)/2))
}
console.log(pyramidArea(4,8));
//#endregion

//#region ================IF/ELSE================

// ======= 1) Par o impar=======

function oddEven(int) {
    // if (int % 2 == 0) {
    //     return "El número es par"
    // }
    // else {
    //     return "El número es impar"
    // }
    return int % 2 == 0 ?
        console.log("El número es par") :
        console.log("El número es impar");
}
console.log(oddEven(7));

// ======= 2) Mayor o gual=======

function highNum(int1,int2,int3) {
    if (int1 == int2 && int2 == int3) {
        return "Los números son iguales"
    }
    else {
        return Math.max(int1,int2,int3);
    }
}
console.log(highNum(1,3,8));

// ======= 3) Tipo de triángulos=======

function tipoTriangulo(lado1,lado2,lado3) {
    if (lado1 == lado2 && lado1 == lado3 && lado2 == lado3) {
        return "El triángulo es equilátero"
    }
    else if (lado1 == lado2 || lado2 == lado3 || lado3 == lado1) {
        return "El triángulo es Isósceles"
    }
    else {
        return "El triángulo es escaleno"
    }
}
console.log(tipoTriangulo(2,2,4));

// ======= 4) Rango de números=======

function isInRange(num, start, end) {
	if (num >= start && num <= end) {
        return true
    } else {
        return false
    }
}
console.log(isInRange(6,3,9));

// ======= 5) operaciones básicas=======

function Add(oper) {
    if (oper.indexOf("+") != -1) {
        let separacion = oper.indexOf("+");
        let n1 = oper.substring(0,separacion);
        let n2 = oper.substring(separacion + 1)
        return parseInt(n1) + parseInt(n2);
    }
    else if (oper.indexOf("-") != -1) {
        let separacion = oper.indexOf("-");
        let n1 = oper.substring(0,separacion);
        let n2 = oper.substring(separacion + 1);
        return parseInt(n1) - parseInt(n2);
    }
    else if (oper.indexOf("*") != -1) {
        let separacion = oper.indexOf("*");
        let n1 = oper.substring(0,separacion);
        let n2 = oper.substring(separacion + 1);
        return parseInt(n1) * parseInt(n2);
    }
    else if (oper.indexOf("/") != -1){
        let separacion = oper.indexOf("/");
        let n1 = oper.substring(0,separacion);
        let n2 = oper.substring(separacion + 1);
        return parseInt(n1) / parseInt(n2);
    }

}
console.log(Add("102+17"));

// ======= 6) Años bisiestos=======

function isLeapYear(year) {
	return year % 4 == 0 ? true : false
}
console.log(isLeapYear(2022));

// ======= 6) Años bisiestos=======

function monthDays(month) {
    if (month == 1 || month == 3 || month == 5 || month == 7
        || month == 8 || month == 10 ||month == 12) {
        return "hay 31 días"
    }
    else if (month == 4 || month == 6 || month == 9 || month == 11){
        return "hay 30 días"
    }
    else{
        return "hay 28 días"
    }
}
console.log(isLeapYear(2022));

//#endregion

//#region =========Arrays==============

// ====================== 1) operaciones con arrays=========================
let months = ["January", "February", "Marj", "April", "Mei"];
// 1.1
months[2] = "March";
months[4] = "May";
//1.2
let newMonths = ["June", "July", "August", "September"];
let totalMonths = months.concat(newMonths);
console.log(totalMonths);
//1.3
totalMonths.push("October", "November", "December");
console.log(totalMonths);

// ====================== 4) Cambia arrays=========================

function changeArray(num1, num2, num3) {
    if (num1 > num2) {
        totalMonths.pop();
    }
    else if (num2 > num3 && num2 < 10){
        totalMonths.shift();
    }
    else if (num2 > num3 || num2 > num1) {
        totalMonths.push("October");
    }
    else{
        console.log("Bad luck!");
    }
}
changeArray(2,3,4);
console.log(totalMonths);

// ====================== 5) Días=========================

let arrayDias = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

//5.1
function FindWednesday(dia) {
    if (arrayDias[arrayDias.indexOf(dia)].length > arrayDias.indexOf(dia)) {
        let newArrayD = arrayDias;
        newArrayD.reverse();
        console.log(newArrayD);
    }
}
FindWednesday("Wednesday");

//5.2
function ComparaLongitud() {
    if (arrayDias[0].length < arrayDias[1].length) {
        console.log(arrayDias.slice(0,3));
    }
}
ComparaLongitud();

//5.3
function buscaPalabras(day) {
    if (arrayDias.indexOf(day) != -1) {
        return console.log("That's nice");
    } else {
        arrayDias.push(day);
        return console.log("Oh no!");
    }
}
buscaPalabras("Sunday");
console.log(arrayDias);

// ====================== 6) Reverse string=========================

function RevertirPalabra(palabra) {
    return palabra.split("").reverse().join("");
}
console.log(RevertirPalabra("Paralelepípedo"));

// ====================== 7) Swap array=========================

let reverbArray = [1,2]
function Swap(array) {
    let pos1 = array[0];
    let pos2 = array[1];
    
    array[0] = pos2;
    array[1] = pos1;

    // return reverbArray.reverse();
    return array
}
console.log(Swap(reverbArray));
//#endregion
