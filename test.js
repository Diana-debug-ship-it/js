function ucFirst(str) {
    return str[0].toUpperCase() + str.slice(1);
}

// console.log(ucFirst("nastya"));

function checkSpam(str) {
    if (str.toLowerCase().includes("viagra") || str.toUpperCase().includes("XXX")) {
        return true;
    }
    return false;
}

// console.log(checkSpam('buy ViAgRA now'));
// console.log(checkSpam('free xxxxx'));
// console.log(checkSpam('innocent rabbit'));

function truncate(str, maxlength) {
    if (str.length > maxlength) {
        return str.slice(0, maxlength - 1) + "...";
    }
    return str;
}

// console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
// console.log(truncate("Всем привет!", 20));

function extractCurrencyValue(str) {
    if (!Number.isNaN(str.slice(1))) {
        return parseInt(str.slice(1));
    } else {
        return 0;
    }
}

// console.log(extractCurrencyValue("$120"));

function showVerticalMessage(str) {
    let i = 0;
    if (str[i]==='s'){
        console.log(str[i].toUpperCase());
        i++;
    }
    let len = str.length>7 ? 7 : str.length;
    for (i; i<len; i++) {
        console.log(str[i]);
    }
}

showVerticalMessage('strada');