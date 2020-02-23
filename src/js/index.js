const arrRu = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ь', 'ы', 'ъ', 'э', 'ю', 'я'];
const arrRU = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ь', 'Ы', 'Ъ', 'Э', 'Ю', 'Я'];

const arrLength = arrRu.length - 1;

const changeLett = (char, letters, step) => {
    let index = letters.indexOf(char)
    if (index + step > arrLength) {
        console.log(index, step, arrLength)
        index = index + step - arrLength
    } else {
        index += step
    }
    return letters[index]
}

const crypto = (str, step) => {
    let result = '';

    for (const item of str) {
        if (item === ' ') {
            result += ' ';
            continue;
        }

        const char = arrRu.includes(item) ? changeLett(item, arrRu, step) 
                : arrRU.includes(item)  ? changeLett(item, arrRU, step) : ' ';

        result += char;
    }
    return result;
}

const cryptoStr = crypto('Привет мир', 3)
const cryptoStr2 = crypto('Привет мир', 16)
 
console.log(cryptoStr, cryptoStr2)