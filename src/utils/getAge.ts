export const getAge = (birthday: string) => {
  const birthdayDate = new Date(birthday);
  const ageDifMonths = Date.now() - birthdayDate.getTime();
  const ageDate = new Date(ageDifMonths);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};
