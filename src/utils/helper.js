export const calculatePointsForTransaction = (price) => {
    if (typeof price !== "number" || price < 0) {
        return 0;
    }

    let points = 0
    let roundedAmount = Math.floor(price)

    if (roundedAmount <= 100) {
        points = roundedAmount - 50; 
    }
    else {
        points = 50 + 2 * (roundedAmount - 100);
    }

    return points
};

export const getMonthYear = (dateString) => {
    const date = new Date(dateString);
    return `${date.getMonth() + 1}-${date.getFullYear()}`;
};