export const calculatePointsForTransaction = (price) => {
    if (typeof amount !== "number" || amount < 0) {
        return 0;
    }

    let points = 0
    let roundedAmount = price//Math.floor(price)
    if (roundedAmount <= 100) {
        points = roundedAmount - 50; 
    }
    else {
        points = 50 + 2 * (roundedAmount - 100);
    }
    console.log("points =>", points)

    return points
};

export const getMonthYear = (dateString) => {
    const date = new Date(dateString);
    console.log("date =>", date, date.getMonth())
    return `${date.getMonth() + 1}-${date.getFullYear()}`;
};