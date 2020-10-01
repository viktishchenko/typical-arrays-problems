exports.min = function min(array) {
    if (arguments.length == 0) {
        return 0;
    }
    let arrLength = array.length;
    if (arrLength == "undefined") {
        return 0;
    }
    if (arrLength == "") {
        return 0;
    }
    if (arrLength == 0) {
        return 0;
    }
    let min = array[0];
    for (i = 0; i < arrLength; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    // let res = Math.min(array);
    return min;
};

exports.max = function max(array) {
    if (arguments.length == 0) {
        return 0;
    }
    let arrLength = array.length;
    if (arrLength == "undefined") {
        return 0;
    }
    if (arrLength == "") {
        return 0;
    }
    if (arrLength == 0) {
        return 0;
    }
    let max = array[0];
    for (i = 0; i < arrLength; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    // let res = Math.max(array);
    return max;
};

exports.avg = function avg(array) {
    if (arguments.length == 0) {
        return 0;
    }
    let arrLength = array.length;
    if (arrLength === "undefined") {
        return 0;
    }
    if (arrLength === "") {
        return 0;
    }
    if (arrLength == 0) {
        return 0;
    }
    let sum = 0;
    let res = 0;
    for (let i = 0; i < arrLength; i++) {
        sum += parseInt(array[i], 10);
    }
    if (sum / arrLength === 0) {
        return 0;
    }
    return (res = sum / arrLength);
};
