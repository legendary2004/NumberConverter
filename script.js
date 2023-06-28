function decimalToBinary(n) {
    let binaryNum = '';
    if (n / 2 != 0) {
        let divident = n;
        while (divident != 0) {
            binaryNum = divident % 2 + binaryNum;
            divident = Math.floor(divident / 2);
        }
    }
    return binaryNum;
}

function decimalToOctal(n) {
    let octalNum = '';
    if (n / 8 != 0) {
        let divident = n;
        while (divident != 0) {
            octalNum = divident % 8 + octalNum;
            divident = Math.floor(divident / 8);
        }
    }
    return octalNum;
}

function decimalToHex(n) {
    let hexNumArray = [];
    let hexNum = ''
    if (n / 16 != 0) {
        let divident = n;
        while (divident != 0) {
            hexNumArray.push(divident % 16);
            divident = Math.floor(divident / 16);
        }
        for (let i = 0; i < hexNumArray.length; i++) {
            if(hexNumArray[i] > 9) {
                hexNumArray[i] = String.fromCharCode(hexNumArray[i] + 55)
            }
            hexNum = hexNumArray[i] + hexNum;
        }
    }
    return hexNum;
}

function binaryToDecimal(n) {
    let sum = 0;
    let product;
    let reverse = '';
    for (let i = n.length - 1; i >= 0; i--) {
        reverse += n[i];
    }
    for (let i = 0; i < reverse.length; i++) {
        product = reverse[i] * Math.pow(2, i);
        sum += Number(product);
    }
    return sum;
}

function binaryToOctal(n) {
    let array = [];
    let sum = '';
    for (let i = n.length; i > 0; i -= 3) {
        array.push(n.substring(i - 3, i));
    }
    for (let element of array.reverse()) {
        sum += element % 8;
    }
    return sum;
}

function binaryToHex(n) {
    let array = [];
    let hexa = '';
    for (let i = n.length; i > 0; i -= 4) {
        array.push(n.substring(i - 4, i));
    }
    for (element of array) {
        hexa += parseInt(element, 2).toString(16).toUpperCase();
    }
    return hexa.split('').reverse().join('');
}

function octalToDecimal(n) {
    let sum = 0;
    let product;
    let reverse = '';
    for (let i = n.length - 1; i >= 0; i--) {
        reverse += n[i];
    }
    for (let i = 0; i < reverse.length; i++) {
        product = reverse[i] * Math.pow(8, i);
        sum += Number(product);
    }
    return sum;
}

function octalToBinary(oc) {
    const d = octalToDecimal(oc);
    return decimalToBinary(d);
}

function octalToHex(n) {
    const d = octalToDecimal(n);
    return decimalToHex(d);
}

function hexToDecimal(n) {
    let hexElements = ['A', 'B', 'C', 'D', 'E', 'F'];
    let hexNum = 0;
    let reverse = n.toUpperCase().split('').reverse();
    for (let i = 0; i < reverse.length; i++) {
        for (let element of hexElements) {
            if (reverse[i] == element) {
                reverse[i] = 10 + hexElements.indexOf(element);
            }
        }
        hexNum += reverse[i] * Math.pow(16, i);
    }
    return hexNum;
}

function hexToBinary(n) {
    const d = hexToDecimal(n);
    return decimalToBinary(d);
}

function hexToOctal(n) {
    const d = hexToDecimal(n);
    return decimalToOctal(d);
}

document.getElementById('converter').addEventListener('click', function() {
    let inputFrom = document.getElementById('selection1').value;
    let inputTo = document.getElementById('selection2').value;
    let inputNum = document.getElementById('number').value;
    let result = document.getElementById('result');

    if (inputFrom === 'Binary') {
        for (let element of inputNum) {
            if (element > 1) {
                alert('Invalid input');
                result.value = '';
                document.getElementById('number').value = '';
                break;
            }
            else {
                if (inputTo === 'Decimal') {
                    result.value = binaryToDecimal(inputNum);
                }
                else if (inputTo === 'Octal') {
                    result.value = binaryToOctal(inputNum);
                }
                else {
                    result.value = binaryToHex(inputNum);
                }
            }
        }
    }
    if (inputFrom === 'Octal') {
        for (let element of inputNum) {
            if (element > 7) {
                alert('Invalid input');
                result.value = '';
                document.getElementById('number').value = '';
                break;
            }
            else {
                if (inputTo === 'Decimal') {
                    result.value = octalToDecimal(inputNum);
                }
                else if (inputTo === 'Binary') {
                    result.value = octalToBinary(inputNum);
                }
                else {
                    result.value = octalToHex(inputNum);
                }
            }
        }
    }
    if (inputFrom === 'Decimal') {
            if (!Number.isSafeInteger(Number(inputNum))) {
                alert('invalid input');
                result.value = '';
                document.getElementById('number').value = '';
            }
            else {
                if (inputTo === 'Binary') {
                    result.value = decimalToBinary(inputNum);
                }
                else if (inputTo === 'Octal') {
                    result.value = decimalToOctal(inputNum);
                }
                else {
                    result.value = decimalToHex(inputNum);
                }
            }
    }
    if (inputFrom === 'Hexadecimal') {
        for (let element of inputNum) {
            if (element > 1) {
                alert('Invalid input');
            }
            else {
                if (inputTo === 'Decimal') {
                    result = binaryToDecimal(inputNum);
                }
                else if (inputTo === 'Octal') {
                    result = binaryToOctal(inputNum);
                }
                else {
                    result = binaryToHex(inputNum);
                }
            }
        }
    }
})

document.getElementById('reset').addEventListener('click', function() {
    document.getElementById('number').value = '';
    document.getElementById('result').value = 'Enter number';
    
})

document.getElementById('swap').addEventListener('click', function() {
    let inputFrom = document.getElementById('selection1').value;
    let inputTo = document.getElementById('selection2').value;
    document.getElementById('selection1').value = inputTo;
    document.getElementById('selection2').value = inputFrom;
    let inputNum = document.getElementById('number').value;
    let result = document.getElementById('result').value;
    if (result != 'Enter number') {
        document.getElementById('number').value = result;
    document.getElementById('result').value = inputNum;
    }
    
})