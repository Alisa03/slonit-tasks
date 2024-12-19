function GameRandomeNumber() {
    const randomNumber = Math.floor(Math.random() * 100) + 1
    console.log(`Компьютер 1 загадал число ${randomNumber}`);

    let maxNumber = 100;
    let minNumber = 1;

    const computer1 = 'Компьютер 1: '
    const computer2 = 'Компьютер 2: '

    let averageNumber = Math.floor((maxNumber + minNumber) / 2)

    do {
        averageNumber = Math.floor((maxNumber + minNumber) / 2)

        console.log(computer2 + `Пробую число ${averageNumber}`)

        if (averageNumber === randomNumber) {
            return console.log(computer1 + 'Угадал!')
        }

        if (averageNumber < randomNumber) {
            minNumber = averageNumber
            console.log(computer1 + 'Больше.');
        } else {
            maxNumber = averageNumber
            console.log(computer1 + 'Меньше.');
        }
    } while (averageNumber !== randomNumber);
}

GameRandomeNumber()