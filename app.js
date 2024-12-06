function GameRandomeNumber() {
    const number = Math.floor(Math.random() * 100) + 1
    console.log(`Компьютер 1 загадал число ${number}`);

    let max = 100;
    let min = 1;

    const comp1 = 'Компьютер 1: '
    const comp2 = 'Компьютер 2: '

    let mid = Math.floor((max + min) / 2)

    do {
        mid = Math.floor((max + min) / 2)

        console.log(comp2 + `Пробую число ${mid}`)

        if (mid === number) {
            return console.log(comp1 + 'Угадал!')
        }

        if (mid < number) {
            min = mid
            console.log(comp1 + 'Больше.');
        } else {
            max = mid
            console.log(comp1 + 'Меньше.');
        }
    } while (mid !== number);
}

GameRandomeNumber()