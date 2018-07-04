const monthlyExpensesWorstCase = {
    rent: 800,
    fastFood: 15 * 10 * 4,
    restaurants: 45 * 3 * 4,
    groceries: 150,
    alcohol: 90 * 4,
    pot: 220,
    phone: 86,
    internet: 55,
    electric: 70,
    gasHouse: 50,
    gasCar: 100,
    netflix: 10,
    spotify: 10,
    "401k": 333.33,
    movies: 80,
    playStationNetwork: 60,
    clubbing: 300,
}

const monthlyExpenses2ndWorstCase = {
    rent: 800,
    fastFood: 15 * 10 * 4,
    restaurants: 30 * 3 * 4,
    groceries: 120,
    alcohol: 80 * 4,
    pot: 200,
    phone: 86,
    internet: 50,
    electric: 65,
    gasHouse: 45,
    gasCar: 90,
    netflix: 10,
    spotify: 10,
    "401k": 333.33,
    movies: 80,
    playStationNetwork: 60,
    clubbing: 250,
}


const monthlyExpensesBestCase = {
    rent: 675,
    fastFood: 8 * 10 * 4,
    restaurants: 30 * 4,
    groceries: 80,
    alcohol: 65 * 4,
    pot: 140,
    phone: 86,
    internet: 30,
    electric: 50,
    gasHouse: 30,
    gasCar: 65,
    netflix: 10,
    spotify: 10,
    "401k": 333.33,
    movies: 20,
    playStationNetwork: 60,
    clubbing: 110,
}

const monthlyExpensesNormalCase = {
    rent: 700,
    fastFood: 10 * 10 * 4,
    restaurants: 30 * 2 * 4,
    groceries: 100,
    alcohol: 65 * 4,
    pot: 170,
    phone: 86,
    internet: 40,
    electric: 60,
    gasHouse: 40,
    gasCar: 80,
    netflix: 10,
    spotify: 10,
    "401k": 333.33,
    movies: 40,
    playStationNetwork: 60,
    clubbing: 200,
}

function main(salary, monthlyExpenses) {
    const yearlyExpenses = Object.keys(monthlyExpenses).map(expense => monthlyExpenses[expense] * 12)
    const moneySpentInOneYear = yearlyExpenses.reduce((total, expense) => total + expense, 0)
    const moneyLeftover = salary - moneySpentInOneYear

    return moneyLeftover
}

const MY_INCOME = 60000
const bestCase = main(MY_INCOME, monthlyExpensesBestCase)
const worstCase = main(MY_INCOME, monthlyExpensesWorstCase)
const worstCase2nd = main(MY_INCOME, monthlyExpenses2ndWorstCase)
const averageCase = main(MY_INCOME, monthlyExpensesNormalCase)

console.log("BEST CASE:", bestCase)
console.log("WORST CASE:", worstCase)
console.log("WORST CASE 2nd:", worstCase2nd)
console.log("AVERAGE CASE:", averageCase)
console.log("AVERAGE OF ALL CASES", (bestCase + worstCase + averageCase + worstCase2nd) / 4)