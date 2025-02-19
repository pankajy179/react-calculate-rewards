export const getMonthYear = (dateString) => {
  const date = new Date(dateString);
  return `${date.getMonth() + 1}-${date.getFullYear()}`; 
};