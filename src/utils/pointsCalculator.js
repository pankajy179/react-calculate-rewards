export const calculatePointsForTransaction = (price) => {
  if (price <= 50) {
    return 0;
  } else if (price <= 100) {
    return price - 50;
  } else {
    return 50 + 2 * (price - 100);
  }
};