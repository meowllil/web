function checkNumber(number) {
    if (number > 0) {
        console.log(number + ' - положительное число');
    } else if (number < 0) {
        console.log(number + ' - отрицательное число');
    } else {
        console.log(number + ' - число равно нулю');
    }

    if (number % 2 === 0) {
        console.log(number + ' - четное число');
    } else {
        console.log(number + ' - нечетное число');
    }
}

checkNumber(2);
checkNumber(-5);
checkNumber(0);





const numbers = [4, 8, 15, 16, 23, 42];

let sum = 0;
let max = numbers[0];
let bigNumbers = [];

for (let x of numbers) {
    sum = sum + x;
    if (x > max) {
        max = x
    }

    if (x > 10) {
        bigNumbers.push(x);
    }
}

console.log('Сумма элементов: ', sum);
console.log('Самое большое число: ', max);
console.log('Числа больше 10: ', bigNumbers);


const numbers = [4, 8, 15, 16, 23, 42];

const sum = numbers.reduce((acc, curr) => acc + curr, 0);
const max = Math.max(...numbers);
const bigNumbers = numbers.filter(num => num > 10);

console.log('Сумма элементов: ', sum);
console.log('Самое большое число: ', max);
console.log('Числа больше 10: ', bigNumbers);




{
        const students = [
        { name: 'Кира', marks: [2, 5, 5, 4, 3] },
        { name: 'Мария', marks: [4, 4, 4, 3, 4] },
        { name: 'Филипп', marks: [5, 5, 5, 5, 4] },
        { name: 'Игорь', marks: [2, 3, 2, 2, 2] },
        { name: 'Авель', marks: [2, 3, 4, 5, 4] },
    ];

    const minMark = 3.5;

    console.log(`Ученики со средним баллом выше + ${minMark}:`)

    for (let student of students) {
        let sum = 0;
        for (let mark of student.marks) {
            sum += mark;
        }

        let mark = sum / student.marks.length;

        if (mark > minMark) {
        console.log(student.name + ' - средний балл: ' + mark.toFixed(2));
        }
    }
}





const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
const secret = Math.floor(Math.random() * 10) + 1;

function Game() {
    readline.question('Какое число от 1 до 10 загадано? ', (ans) => {
        let num = Number(ans);
        if (num === secret) {
            console.log('Поздравляем! Вы угадали число: ' + secret);
            readline.close();
        } else if (num > secret) {
            console.log('Загаданное число меньше. Попробуйте еще раз: ');
            Game();
        } else {
            console.log('Загаданное число больше. Попробуйте еще раз: ');
            Game();
        }
    });    
}

Game();