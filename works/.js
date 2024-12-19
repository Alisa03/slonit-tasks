function calculateAmountOfPurchases(usersList) {
    let totalAmount = 0;

    usersList.forEach(item => {
        totalAmount += item;
    });

    return totalAmount;
}

let topPurchaseAmounts = [10000, 20000, 30000];
console.log(calculateAmountOfPurchases(topPurchaseAmounts));

// такое название вроде передает предназначение функции, но длинное и не читаемое. Как улучшить нейминг? 