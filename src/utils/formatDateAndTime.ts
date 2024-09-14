export const formatDateAndTime = (date: string) => {
  return `${date.split('T')[0].split('-').reverse().join('/')} - ${date
    .split('T')[1]
    .slice(0, 5)}`;
};
